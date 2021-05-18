import express from 'express';
import fs from 'fs';
import util from 'util';
const router = express.Router();
//const exec = util.promisify(require('child_process').exec);
/*router.get('/',(req,res)=>{
    //Start a docker container
    buildImage(req.body);
    runImage(sessionID);
});


async function buildImage(sessionID) {
  const { stdout, stderr } = await exec('docker build -t '+sessionID);
  return stdout;
}
async function runImage(sessionID) {
    const { stdout, stderr } = await exec('docker run -p 49160:8080 -d '+sessionID);
    return stdout;
  }*/

  export default router;