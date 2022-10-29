const googleService = require('../../services/googleService');

module.exports = class googleController {
    static async apiGdrive(req, res, next){
        try{
            const driveService = await googleService.getDriveService();
            const fileId = await googleService.scanFolderForFiles(driveService,req.body.filename,req.body.filepath);
            res.json(fileId);
        }   
        catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
}
