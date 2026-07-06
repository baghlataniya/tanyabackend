require('dotenv').config()
const express=require('express');
const app=express();
const port=4000
app.get('/',(req,res)=>{
res.send('hello world')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1> plese login at our chai or code </h1>')

})
app.get('/youtube',(req,res)=>{
    res.send("<h2> chai or code </h2>")
})
app.listen(process.env.PORT ,()=>{
  console.log(`example app listening on port ${port}`)
})

