import express from 'express';

const app = express();


app.get('/',(req, res)=>{
    res.json('Backend Connected')
})




const PORT = 8080;
app.listen(PORT, ()=>console.log('Backend Connected!'));
