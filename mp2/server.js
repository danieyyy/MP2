const express = require("express")
const app = express();
const jwt = require("jsonwebtoken")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const cors = require('cors')
app.use(
    cors({
        origin: "http://localhost:5000"
    })
)

const LoginProfiles = [

    {
        id: 1,
        username: "rickyjcg22",
        email: "gomezrickyjay@gmail.com",
        password: "Rjcgomez22",
        isAdmin: true
    },
    
    {
        id: 2,
        username: "daniella",
        email: "danniellasarraga@gmail.com",
        password: "Dasarraga2023",
        isAdmin: false
    }
];

app.post('/login',(req.res) => {
    const {username, email, password} = req.body;

    const user = LoginProfiles.find(
        (u) => {
            if((u.username === username || u.email === email) && u.password === password) {
                return u;
            }
        }
    )

    console.log(user);
})






// -----------------------------------------------------------------

app.listen(5000)
console.log("server is running in port 5000")