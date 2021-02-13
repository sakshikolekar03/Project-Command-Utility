
let fs=require("fs");
const path=require('path');
let orgDir;
function organizeExecuter(dirPath)
{   
    /* create main folder => OrganizedFiles.  create sub folder for each type under this folder */
    orgDir=dirPath+"/OrganizedFiles"; //base directory
    if (!fs.existsSync(orgDir)){
        fs.mkdirSync(orgDir);
    }
    subDirs=[orgDir+"/Videos", orgDir+"/Audios", orgDir+"/Docs", orgDir+"/Txts", orgDir+"/Images"];
    for(let i=0;i<subDirs.length;i++)
    if (!fs.existsSync(subDirs[i])){
        fs.mkdirSync(subDirs[i]);
    }

    console.log( fs.readdirSync(dirPath));

    fileOrganizer(dirPath);

    console.log("\n[STATUS]: organize command executed successfully...");
    console.log("-------------------------------------------------------------------------------------------");
};


function isFileChecker(dirPath)
{
        return fs.lstatSync(dirPath).isFile();
}

function readFolderContent(dirPath)
{
    //fs.readdirSync(dirPath) returns array of folder/fil names in current folder/dirPath
    return fs.readdirSync(dirPath); //if many files then stack prob then use Asynch functiom
}

function putInCorrectFolder(filePath)
{
        let filename=path.basename(filePath);
        let extension=path.extname(filePath);
        console.log("filename: ",filename," extention: ",extension);

        if(extension==".jpeg" || extension==".jpg" || extension==".png" || extension==".gif")
        {
            fs.rename(filePath, orgDir+"/Images/"+filename, (err)=>{
                if(err) throw err;
                else console.log('Successfully moved');
                });
        }
        else if(extension==".mp4" || extension==".avi" || extension==".mkv" || extension==".flv")
        {
            fs.rename(filePath, orgDir+"/Videos/"+filename, (err)=>{
                if(err) throw err;
                else console.log('Successfully moved');
                });
        }
        else if(extension==".mp3" || extension==".wav")
        {
            fs.rename(filePath, orgDir+"/Audios/"+filename, (err)=>{
                if(err) throw err;
                else console.log('Successfully moved');
                });
        }
        else if(extension==".docx" || extension==".doc" || extension==".pdf" || extension==".csv")
        {
            fs.rename(filePath, orgDir+"/Docs/"+filename, (err)=>{
                if(err) throw err;
                else console.log('Successfully moved');
                });
        }
        else if(extension==".txt")
        {
            fs.rename(filePath, orgDir+"/Txts/"+filename, (err)=>{
                if(err) throw err;
                else console.log('Successfully moved');
                });
        }

}

function fileOrganizer(dirPath)
{
    if(isFileChecker(dirPath))
    {
        console.log(dirPath+" is accessed");
        //put that file inrespectiveapppropriate folder

        putInCorrectFolder(dirPath);
    }
    else
    {
        if(dirPath==orgDir)
        {
            console.log("org dir found... returning");
            return;
        }
        else{
        console.log(dirPath);

        let children=readFolderContent(dirPath);

        for(let i=0;i<children.length;i++)
        {
            fileOrganizer(dirPath+"/"+children[i]);
        }
    }
    }
}




module.exports={
    orgFun:organizeExecuter
}