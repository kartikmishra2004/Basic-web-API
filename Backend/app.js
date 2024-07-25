import express from 'express';
import cors from 'cors'
import connectDB from './db.js';
import Item from './school.modle.js';
const app = express();
connectDB();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/school", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);

    } catch (error) {
        console.log("Error finding school");
    }
});

app.listen(port, () => {
    console.log(`App is listning on port : ${port}`);
});