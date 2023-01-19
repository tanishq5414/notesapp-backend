const express = require("express")
const path = require("path")
const multer = require("multer")
const fs = require('fs');
// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
module.exports = class localUpload {
    static async uploadAPI(req,res){
        const storage = multer.diskStorage({
          destination : (req,file,cb) => {
              cb(null,'../pdfStorage/')
          },
          filename : (req,file,cb) => {
            console.log(file);
            cb(null, Date.now() + path.extname(file.originalname) )
          },
        })

        const upload = multer({storage : storage});
        upload.single('pdf');
    }

  
}