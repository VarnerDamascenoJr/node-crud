import 'dotenv/config'
import { app } from './server'
import { db } from './config/mysql/mysqlConnection'

const PORT = process.env.PORT


//db.sync(() => console.log('Banco de connectad'))
app.listen(PORT, () => console.log(`Backend online at ${PORT}`))
