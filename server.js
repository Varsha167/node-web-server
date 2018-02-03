const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const port = process.env.PORT  || 3000
var app = express()



hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs')


//Didn't use next. So everything stops here
// app.use((req,res,next)=>{
//   res.render('maintainance.hbs')
// })

// app.use((req,res,next) => {
//   var now = new Date().toString()
//   var log = `${now} : ${req.method} ${req.url}`
//   console.log(log)
//   fs.appendFile('server.log', log + '\n', err)
//   if(err){
//     console.log("Error ...")
//   }
//   next()
// })

//to access the help page
app.use(express.static(__dirname+'/public'))


hbs.registerHelper('getCurrentYear' , ()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('screamIt' , (text)=>{
  return text.toUpperCase()
})


app.get('/', (req,res)=>{
  //res.send('<h1>Hello Express. We meet again. </h1>')
  // res.send({
  //   name: "Varsha",
  //   like: ['coding','reading','watching movies']
  // })
  res.render('welcome.hbs' , {
    pageTitle: 'Welcome',
    welcomeMess: "Hello and Welcome",
    //date: new Date().getFullYear()
  })
})

app.get('/about', (req,res)=>{
  //res.send("Welcome to the about page")
  res.render('about.hbs' , {
    pageTitle: 'About Page',
    //date: new Date().getFullYear()

  })
})


// app.get('/about', (req,res)=>{
//   res.send("Welcome to the about page")
// })

app.get('/bad', (req,res)=>{
  res.send({
    error: "Unable to process request"
  })

})

app.listen(port, (req,res)=>{
  console.log(`Listening on port ${port}`)
})
