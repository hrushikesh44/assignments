const express = require("express");
const app = express();

app.use(express.json());

let users = [];

function generateToken() {
    let options = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ];
    let token  = "";
    for(let i = 0; i < 32; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/sign-up", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "you've signed in successfully",
        
    });
});

app.post("/sign-in", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }

});

app.get("/me", function(req, res){
    const token = req.headers.token;
    const user = users.find(user => user.token == token);

    if(user){
        res.json({
            username : user.username, 
            password : user.password
        })
    }else{
        res.status(404).json({
            message : "invalid token"
        })
    }
})

app.listen(3000);
