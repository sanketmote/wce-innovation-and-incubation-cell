
module.exports = {

    HOST: "localhost",
    USER: "root",
    PASSWORD: "<db_password>",
    DB: "wce-iandic",
    dialect: "mysql",   
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};