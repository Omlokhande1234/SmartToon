import app from "./app.js";
import { dbConnect } from "./db/databaseConfig.js"
import cloudinary from 'cloudinary'

const PORT=process.env.PORT||3000;

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET_KEY,
})

app.listen(PORT,async ()=>{
    await dbConnect();
    console.log(`server is running on port ${PORT}`);
})

app.get("/", (req, res) => {
    res.json({
        name:"SmartToon"
    });
});
