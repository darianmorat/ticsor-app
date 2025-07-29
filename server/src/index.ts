import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
   cors({
      credentials: true,
      origin: process.env.CLIENT_URL,
   }),
);

app.use("/auth", authRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`listening in port: ${PORT}`);
});
