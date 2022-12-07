import express,{ json } from "express";
import {} from "dotenv/config";
import session from "express-session";


const PORT= process.env.PORT;
const app= express();


app.use(json());

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