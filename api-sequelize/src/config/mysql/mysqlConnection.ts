import { Sequelize } from "sequelize";



const host = process.env.MYSQL_HOST!;
const password = process.env.MYSQL_PASSWORD!;
const user = process.env.MYSQL_USERNAME!;
const database = process.env.MYSQL_DATABASE!;



const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host: host,
})


export {
  sequelize as db
}
