import mysql from 'mysql'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'host',
  password: 'Password@#!123',
  database: 'test'
})
