import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./utils/database.js";
import userRouter from "./router/userRouter.js"
import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 2000;
const app = express();
app.use(express.json());

const corsOptions = {
    origin : process.env.FRONTEND_URL,
    method:"PUT,GET,POST,PATCH,DELETE,HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(
    helmet({
      crossOriginResourcePolicy: false,
    })
  );
  morgan.token("current-time", () => {
    const date =
      "Date " +
      new Date().toLocaleDateString() +
      "and the time " +
      new Date().toLocaleTimeString();
    return date;
  });
  
  // app.use(
  //   morgan(
  //     "the method is :method, status is :status, response time is :response-time and current date and time is :current-time "
  //   )
  // );
  
  app.get("/", (req, res) => {
    res.json({
      port: "server is running on " + PORT, 
    });
  });

  app.use("/api/user",userRouter)

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
  });
})