const express = require('express');

const router = express.Router();

const User = require('../models/user.models');

const transporter = require('../configs/mail');





router.post("", async(req,res)=>{
    try {
        const user = await User.create(req.body);
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
           
            // create reusable transporter object using the default SMTP transport
           
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: '"Amazon Admin 👻" <amazon@amz.com>', // sender address
              to: `${user.email}`, // list of receivers
              subject:`Welcome to ABC system ${user.firstName} ${user.lastName}`, // Subject line
              text: `Hi ${user.firstName}`, // plain text body
              html: `<b>Hi ${user.firstName}</b>`, // html body
            });
          
          
          
          }
          
          main().catch(console.error);
        return res.status(201).send({message:"success"});
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

router.get("", async(req,res)=>{
    try {
        const page = req.query.page;
        const pagesize = req.query.pagesize;

        const skip = (page-1)*pagesize;

        const user = await User.find().skip(skip).limit(pagesize).lean().exec();

        const totalpage = Math.ceil(
            (await User.find().countDocuments())/pagesize
            );

            res.status(200).send({user,totalpage});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

module.exports = router;


