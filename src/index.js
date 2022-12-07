import express,{ json } from "express";
import {} from "dotenv/config";
import session from "express-session";


const PORT= process.env.PORT;
const app= express();


app.use(json());


const sess = {
    secret: "boh",
    resave: false,
    saveUnitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 240000000000,
    }
}
app.use(session(sess));

app.get("/",(req,res)=>{
    console.log(req.session)
    res.send("Hello there, welcome")
})

app.get("/setname",(req,res)=>{
    req.session.user ={ name : "Jane Doe"}
    console.log(req.session.user)
    res.send(`Welcome ${req.session.user.name} !`)
    res.end();

})

app.get("/getname",(req,res)=>{
    res.send(`You still connected ${req.session.user.name}`)
} )


async function AppStart(){
    try{
    await app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`)
    })
}catch(error){
    console.log(error);
}
}

AppStart()