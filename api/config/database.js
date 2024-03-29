import "dotenv/config";
import mysql from "mysql";

export const db = mysql.createConnection({
	host:process.env.MYSQL_HOST,
	user:process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database:process.env.MYSQL_DATABASE
});