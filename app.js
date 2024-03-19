const express = require("express");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const connection = require("express-myconnection");
const db = {
  host : "localhost",
  user : "root",
  passeword : "",
  port : "3306",
  database : "baseform"
};
const app = express();


app.use(express.urlencoded({extended : false}));
app.use(myConnection(mysql,db,'pool'));

app.set("view engine", "ejs")
app.set("views", "IHM")

 
// afficher les donnnées de la base 
app.get('/affiche',(req,res)=>{
    req.getConnection((erreur, connection)=>{
      if(erreur){
        console.log(erreur);
      }else{
        connection.query('SELECT*FROM base_formulaire', [], (erreur, resultat)=>{
          if(erreur){
            console.log(erreur);
          }else{
            res.status(200).render("affiche", { resultat });
          }
        });
      }
    });
});  

// envoyer des données dans la base
app.post('/base_formulaire', (req,res)=>{
  let nom = req.body.nom
  let email = req.body.email
  let mpasse = req.body.mpasse
  let confirmer = req.body.confirmer

  req.getConnection((erreur, connection)=>{
    if(erreur){
      console.log(erreur);
    }else{
      connection.query("INSERT INTO base_formulaire(id, nom, email, mpasse, confirmer) VALUES(?, ?, ?, ?, ?)",
       [null, nom, email, mpasse, confirmer], (erreur, resultat)=>{
        if(erreur){
          console.log(erreur);
        }else{
          res.status(300).redirect("formulaire");
        }
      });
    }
  });

})

app.get('/',(req,res)=>{
  res.status(200).render("architectureSite");
})

app.get('/formulaire',(req,res)=>{
    res.status(200).render("formulaire");
})

app.use((req,res)=>{
    res.status(404).render("pageIntrouvable");
})

app.listen(3001,function check(error) {
    if (error) {
    console.log("Erreur....!!!!");
    }else {
        console.log("serveur connecté....!!!! 3001");
    }
});