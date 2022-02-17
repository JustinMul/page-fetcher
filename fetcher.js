const request = require('request');
const fs = require('fs');


let inputArr = process.argv.splice(2);

let url = inputArr[0];
let localPath = inputArr[1];

request(url, (error, response, body) => {
  
  console.log('body:', body); // Print the HTML for the education
  fs.writeFile(localPath, body, err => {
   
    if (err) {
      console.error(err);
      return;
    }
   
    //file written successfully
    fs.stat(localPath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`The size of the file is ${stats.size}`);
      //we have access to the file stats in `stats`
    });
  });
  
  
});
