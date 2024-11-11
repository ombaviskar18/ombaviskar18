import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import businessRoute from "./routes/business.route.js"
import businessinfoRoute from "./routes/businessinfo.route.js"
import applicationRoute from "./routes/application.route.js"


dotenv.config({});

const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));


const PORT =  process.env.PORT || 3000;
 
app.use("/api/v1/user", userRoute);
app.use("/api/v1/business",businessRoute );
app.use("/api/v1/businessinfo",businessinfoRoute );
app.use("/api/v1/application",applicationRoute );

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running at port ${PORT}`)
})