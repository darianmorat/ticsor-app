import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import alphabetRoute from "./routes/alphabet.route";
import moduleRoute from "./routes/module.route";
import lessonRoute from "./routes/lesson.route";

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
app.use("/user", userRoute);
app.use("/alphabet", alphabetRoute);
app.use("/module", moduleRoute);
app.use("/lesson", lessonRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`listening in port: ${PORT}`);
});
