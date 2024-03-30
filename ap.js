//Etablistement de la connexion à la database
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     port: "3306",
//     database: "baseform",
// });
// db.connect(function (error) {
//     if (error) {
//       console.log("Erreur Connexion à la DB");
//     } else {
//       console.log("Connexion avec succès à la DB");
//     }
//   });


//Création des enregistrements
// app.post("/api/base_formulaire/add", (req, res) => {
//     let details = {
//         nom:req.body.nom,
//         email:req.body.email,
//         mpasse:req.body.mpasse,
//         confirmer:req.body.confirmer,
//     };
//     let sql = "INSERT INTO base_formulaire SET ?";
//     db.query(sql, details, (error) => {
//       if (error) {
//         res.send({ status: false, message: "Création utilisateur échouée !" });
//       } else {
//         res.send({ status: true, message: "Création utilisateur succès" });
//       }
//     });
//   });



// //Affichages des enregistrements
// app.get("/api/stagiaire", (req, res) => {
//     var sql = "SELECT * FROM stagiaire";
//     db.query(sql, function (error, result) {
//       if (error) {
//         console.log("Erreur Connexion à la DB");
//       } else {
//         res.send({ status: true, data: result });
//       }
//     });
//   });




//   //Recherche d'enregistrements
//   app.get("/api/stagiaire/:id", (req, res) => {
//       var stagiaireid = req.params.id;
//       var sql = "SELECT * FROM stagiaire WHERE id=" + stagiaireid;
//       db.query(sql, function (error, result) {
//         if (error) {
//           console.log("Erreur Connexion à la DB");
//         } else {
//           res.send({ status: true, data: result });
//         }
//       });
//     });



//  //Mise à jour des enregistrements
// app.put("/api/stagiaire/update/:id", (req, res) => {
//     let sql =
//       "UPDATE stagiaire SET nom='" +
//       req.body.nom +
//       "', cours='" +
//       req.body.cours +
//       "',note='" +
//       req.body.note +
//       "'  WHERE id=" +
//       req.params.id;
  
//     let a = db.query(sql, (error, result) => {
//       if (error) {
//         res.send({ status: false, message: "Mise à jour stagiaire échouée !" });
//       } else {
//         res.send({ status: true, message: "Stagiaire met à jour successfully" });
//       }
//     });
// });  



// const express = require("express");
// const app = express();


// app.set("view engine", "ejs")
// app.set("views", "IHM")


// app.get('/',(req,res)=>{
//   res.status(200).render("architectureSite");
// })

// app.get('/formulaire',(req,res)=>{
//     res.status(200).render("formulaire");
// })

// app.use((req,res)=>{
//     res.status(404).render("pageIntrouvable");
// })

// app.listen(3001,function check(error) {
//     if (error) {
//     console.log("Erreur....!!!!");
//     }else {
//         console.log("serveur connecté....!!!! 3001");
//     }
// });