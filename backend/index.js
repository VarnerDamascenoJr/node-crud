import 'dotenv/config'
import express from 'express';
import mysql from 'mysql';
import cors from 'cors'
const app = express();


const db = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
})


app.use(express.json())
app.use(cors())
app.get('/',(req, res)=>{
    res.json('Backend Connected')
})

app.get('/books', (req, res)=>{
    const q = 'SELECT * FROM books'
    db.query(q,(err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.post('/books', (req, res)=>{
    const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES (?)"
    const values =[ 
        req.body.title,
        req.body.desc,
        req.body.price, 
        req.body.cover
    ]
    db.query(q, [values],(err, data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})


app.delete('/books/:id',(req, res)=>{
    const q = "DELETE FROM books WHERE id=?"
    const value = req.body.id

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})



app.listen(process.env.PORT, ()=>console.log('Backend Connected!'));
