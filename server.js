const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { Rembg } = require("@xixiyahaha/rembg-node");
const sharp = require("sharp");

const app = express();
const upload = multer();

app.use(cors());
app.use(express.static("public"));

app.post("/api/remove-bg", upload.single("image"), async (req, res) => {
    const format = req.body.format || "webp";
    const quality = req.body.quality || "high";

    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    try {
        const inputBuffer = req.file.buffer;
        const inputImage = sharp(inputBuffer);

        const rembg = new Rembg({
            logging: true,
            
        });

        const output = await rembg.remove(inputImage);
        
        let outputBuffer;
        let qualityValue;

        switch (quality) {
            case "low":
                qualityValue = 60;
                break;
            case "medium":
                qualityValue = 80;
                break;
            case "high":
            default:
                qualityValue = 100;
                break;
        }

        switch (format) {
            case "jpeg":
                outputBuffer = await output.jpeg({ quality: qualityValue }).toBuffer();
                res.set("Content-Type", "image/jpeg");
                break;
            case "png":
                outputBuffer = await output.png({ quality: qualityValue }).toBuffer();
                res.set("Content-Type", "image/png");
                break;
            case "webp":
            default:
                outputBuffer = await output.webp({ quality: qualityValue }).toBuffer();
                res.set("Content-Type", "image/webp");
                break;
        }

        res.send(outputBuffer);
    } catch (error) {
        console.error("Error processing image:", error);
        res.status(500).send("Error processing image.");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});