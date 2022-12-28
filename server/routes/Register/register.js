const Express = require('../../services/ServiceHost').Express;
const DatabaseRepository = require('../../utils/MySqlDb/MySqlDBrepository');
const User = require('../../Models/User')
const sequelize = require('../../services/ServiceHost').sequelize;
const Sequelize = require('sequelize');
const router = Express.Router();

router.post('/', async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        const register = {
            name:req.body.name,
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        }
        var AddAddressResponse = await DatabaseRepository.insertOne(User, register, null, transaction);
        console.log(AddAddressResponse);
        res.status(200).send(AddAddressResponse);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;