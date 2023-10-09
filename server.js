let express = require('express');
let app = express();

const mongoose = require('mongoose');
const mongoDB_URL = "mongodb+srv://duduca:123@patota-db.r05fgaw.mongodb.net/?retryWrites=true&w=majority"
const port = 3000;


const Player = require('./models/playerModel').PlayerModel
const Team = require('./models/teamModel').TeamModel



app.post('/team/add', async function(req, res) {
  try {
    const team = await Team.create({
      name: "Flamengo"
    })

    res.send('deu certo');

  } catch (error) {
    res.send(error)
  }
  
  
});

app.post('/player/add', async function(req, res) {
  try {
    const player = await Player.create({
      name: "Kauan",
      position: "Atacante",
      team: {name: "Flamengo"}
    })

    res.send('deu certo');

  } catch (error) {
    res.send(error)
  }
  
  
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})




mongoose.connect(mongoDB_URL).then(()=> {
  console.log("TAMO GRANDE CONECTOU")
}).catch((erro)=>{
  console.log(erro)
  console.log("DEU ERRO TAMO PEQUENO")
})