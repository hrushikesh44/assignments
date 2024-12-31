const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hrushikeshmodupalli";
const app = express();

app.use(express.json());

let users = [];

app.get("/", function(req, res){
    res.sendFile( "/home/hrushikesh/assignments/authentication/public/index.html")
})

app.post("/sign-up", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "you've signed up successfully",
        
    });
});

app.post("/sign-in", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET);
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

function auth(req, res, next){
    const token = req.headers.token;

    if(token){
        jwt.verify(token, JWT_SECRET, function(err, decoded){
            if(err){
                res.status(404).json({
                    msg: "Unauthorised"
                });
            }else{
                req.user = decoded;
                next();
            }
        })
    }else{
        res.status(404).json({
            msg : "Token not available "
        })
    }
}

app.get("/me", auth, function(req, res){
    const user = req.user

    res.json({
        username : user.username
    })
})

app.listen(3000);
