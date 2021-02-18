
let fs=require("fs");
//let rimraf = require("rimraf");
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

    fileOrganizer(dirPath);
    deleteEmptyFoders(dirPath);

    console.log("\n[STATUS]:All the files are organized now!! \n         organize command executed successfully...");
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
        if(extension==".jpeg" || extension==".jpg" || extension==".png" || extension==".gif")
        {
            fs.rename(filePath, orgDir+"/Images/"+filename, (err)=>{
                if(err) throw err;
                });
        }
        else if(extension==".mp4" || extension==".avi" || extension==".mkv" || extension==".flv")
        {
            fs.rename(filePath, orgDir+"/Videos/"+filename, (err)=>{
                if(err) throw err;
                });
        }
        else if(extension==".mp3" || extension==".wav")
        {
            fs.rename(filePath, orgDir+"/Audios/"+filename, (err)=>{
                if(err) throw err;
                });
        }
        else if(extension==".docx" || extension==".doc" || extension==".pdf" || extension==".csv")
        {
            fs.rename(filePath, orgDir+"/Docs/"+filename, (err)=>{
                if(err) throw err;
                });
        }
        else if(extension==".txt")
        {
            fs.rename(filePath, orgDir+"/Txts/"+filename, (err)=>{
                if(err) throw err;
                });
        }

}

function fileOrganizer(dirPath)
{
    if(isFileChecker(dirPath))
    {
        putInCorrectFolder(dirPath);
    }
    else
    {
        if(dirPath==orgDir) //"org dir found... returning"
        {
            return;
        }
        else{
        let children=readFolderContent(dirPath);
        for(let i=0;i<children.length;i++)
        {
            fileOrganizer(dirPath+"/"+children[i]);
        }
    }
    }
}


function deleteEmptyFoders(dirPath)
{
    let children=readFolderContent(dirPath);
    for(let i=0;i<children.length;i++)
    {
        if(children[i]!="OrganizedFiles")
            try {
                fs.rmdirSync(dirPath+"/"+children[i], { recursive: true });
            } catch (err) {
                console.error(`Error while deleting ${dir}.`);
            }

    }   
}

module.exports={
    orgFun:organizeExecuter
}