
let express = require('express');
let app = express();

const mongoose = require('mongoose');


const mongoDB_URL = "mongodb+srv://duduca:123@patota-db.r05fgaw.mongodb.net/?retryWrites=true&w=majority"

const port = 3000;

app.get('/user/delete', function(req, res) {
    let usuario = "eduardo"
    usuario = 'deletado'
  res.send(usuario);
});

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`)
//   })

  mongoose.connect(mongoDB_URL).then(()=> {
    console.log("TAMO GRANDE CONECTOU")
  }).catch((erro)=>{
    console.log(erro)
    console.log("DEU ERRO TAMO PEQUENO")
  })