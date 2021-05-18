import express from 'express';

const router = express.Router();


var url = 'mongodb://localhost:9335/sessiondb';

/*MongoClient.connect(url,function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});*/

router.get('/',(req,res)=>{
    //Generate a sessionID and send it through response
    const sessionID = makeid(16);
    //Add to the database
    var data = {
      sessionID:sessionID
    }
    res.send(data);
});


function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

export default router;