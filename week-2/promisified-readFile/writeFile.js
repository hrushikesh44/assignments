const fs = require("fs").promises;

async function writetoFile(filePath, content){
    try{
        await fs.writeFile(filePath, content, 'utf8');
        console.log (content);
    }catch(err){
        console.log(`error cating file ${err}`);
    }
}

const content = "Hello world!!";
writetoFile("example.txt", content);

