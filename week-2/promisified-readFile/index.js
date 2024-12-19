const fs = require("fs");
function readFile(filePath,cb) {
    return new Promise(function resolve() {
        fs.readFile(filePath, "utf-8", function(err, data) {
            if(err){
                console.log("Error finding file");
            }else{
            console.log(data);
            }
        })
    })
}

async function main() {
  await readFile("c.txt");
  console.log("Done reading file");
}

main();
























