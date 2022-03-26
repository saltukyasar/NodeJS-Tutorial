const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Index sayfasi')
})
app.get('/about', function (req, res) {
    res.status(200).send('About sayfasi')
  })
  app.get('/contact', function (req, res) {
    res.status(200).send('Contact sayfasi')
  })

  app.get('*',(req,res)=>{
    res.status(404).send('404 sayfa bulunamadi')
  })

  const port = 3000;
app.listen(port,()=>{
    console.log(`sunucu ${port} calismaya basladi...`);
})