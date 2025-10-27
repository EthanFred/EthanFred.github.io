
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";




dotenv.config();

const app = express();
const PORT = 3000;


const endpoint = `https://newsdata.io/api/1/latest?apikey=${process.env.API_KEY}&language=en&size=10`;


app.use(cors()); //this is needed to make sure both front end and back end run on one port


app.get("/api/news", async (req,res) =>
{
    console.log("in backend, get apinews");

    try {
        const response = await fetch(endpoint);
        
        if(!response.ok)
        {
            //needed for when i kept sending in bad requests
            // //knowing both the status and the text
            console.error("API request failed:", response.status, response.statusText);
            const text = await response.text();
            console.error("Response body:", text);
            return res.status(500).json({ error: "Failed to fetch news from API" });
            
        }
        
        const json = await response.json();
        //console.log(json);
        
        res.json(json);
        
    }
    catch (err){
        console.log(err)
        console.error('Failed to get news');
    }
});


//Start sever and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


