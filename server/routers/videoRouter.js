const express = require("express");
const router = express.Router();
const Video = require('../models/video');

router.post('/video', async (req,res) => {
    try {
        const video = new Video({
            url: req.body.url,
          });

    
        await video.save()
        res.status(200).send(video)
        
    } catch(e) {
        res.status(500).send(e)
    }
   
})

router.get('/video', async(req,res) => {
     try {
        const videos = await Video.find()

        if(!videos) {
            return res.json({message:"No videos found"})
        }

        res.status(200).send(videos)
     } catch(e) {
        res.status(500).send(e)
     }
   
})

router.get('/video/:id', async(req,res) => {
    try {
       const video = await Video.findById({_id: req.params.id})

       if(!video) {
           return res.json({message:"The video you are looking for is not found"})
       }

       res.status(200).send(video)
    } catch(e) {
       res.status(500).send(e)
    }
  
})

router.patch('/video/:id', async(req,res) => {
    try {
        const video = await Video.findOne({
          _id: req.params.id,
        });
        if (!video) {
          return res.status(404).send();
        }
    
        video.url = req.body.url
        await video.save();
        res.send(video);
      } catch (e) {
        res.status(400).send(e);
      }
})

router.delete('/video/:id', async(req,res) => {
    try {
        const video = await Video.findOneAndDelete({
          _id: req.params.id,
        });
    
        if (!video) {
          return res.status(404).send();
        }
    
        res.send({ message: "Successfully Deleted" });
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router