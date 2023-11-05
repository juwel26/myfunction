const express = require('express')
const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

const pLnguses=[]
app.get('/', (req, res) => {
  res.render("index",{plname:pLnguses });
})
app.get('/contact', (req, res) => {
  res.render("contact",{});
})
app.get('/update', (req, res) => {
  res.render("update",{});
})

app.post('/', (req, res) => {
  const planguse = req.body.planguse
  pLnguses.push(planguse)
  
   res.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})