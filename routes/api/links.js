const express = require("express");
// const { Link } = require("react-router-dom");
const router = express.Router();

const Link = require("../../models/Link");


router.post("/getLinks",(req,res)=>{
    console.log("get Links connected");

    // const sub=req.body.sub;
    // const link=req.body.link;
    // console.log({[sub] : [link]})
    // Link.updateOne({},{})
    Link.find({ "_id":"5f448d2750b81f4fab9ac5e7" }).then(links => {
        if (links) {
          const l=links;
          console.log("get links",l[0])
          console.log(links)
        return res.json(links[0]);
      } else {
        return res
          .status(400)
          .json({ notFound: "user not found" });
      }
    });


});

router.post("/postLinks",(req,res)=>{
    console.log("post links connected");
    const sub=req.body.sub;
    const link=req.body.link;
    console.log(req.body,sub,link)


     Link.findOneAndUpdate({ "_id":"5f448d2750b81f4fab9ac5e7"},
     {$set:{ [req.body.sub]:req.body.link }},{new:true},
     (err,userProfile)=>{
        if (err) {
          console.log("Something wrong when updating data!"+ err);
      }
    
});
});

module.exports=router;