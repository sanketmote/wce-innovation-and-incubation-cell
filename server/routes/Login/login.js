const Express = require('../../services/ServiceHost').Express;
const DatabaseRepository = require('../../utils/MySqlDb/MySqlDBrepository');
const User = require('../../Models/User')
const sequelize = require('../../services/ServiceHost').sequelize;
const Sequelize = require('sequelize');
const router = Express.Router();
const mysql=require('mysql2');

router.post('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        const getQuery = 'select *  from user where email = ' + mysql.escape(req.body.email) + ' and password = ' + mysql.escape(req.body.password);

        var QueryRes = await DatabaseRepository.query(getQuery, {
            replacement: [], type: Sequelize.QueryTypes.SELECT
        });
        console.log(QueryRes);
        if(QueryRes.length == 0) {
            res.status(406).send("Wrong Credentials")
        }
        res.status(200).send("ok");
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});



module.exports = router;