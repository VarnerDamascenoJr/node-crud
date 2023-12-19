import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express()

const db = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.json('Backend connected!')
})

app.get('/books', async (req, res) =>{
    const q = 'SELECT * FROM books'
    await db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/books', async (req, res)=>{
    const q = 'INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)'
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    await db.query(q,[values],(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    } )
})

app.delete('/books/:id', async(req, res)=>{
    const bookId = req.params.id;
    const q = 'DELETE FROM books WHERE id=?'

    await db.query(q,[bookId], (err, data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.put('/books/:id', async (req, res)=>{
    const bookId = req.params.id;
    const q = 'UPDATE books SET `title`=?, `desc`=?, `price`=?, `cover`=? WHERE id=?'
    const values=[
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    await db.query(q,[...values,bookId],(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.listen(process.env.PORT, ()=> console.log("Backend connected!"))

