
let fs=require("fs");
const path=require('path');
let orgDir;
let types = {
    media: [".mp4", ".mkv", ".mp3",".avi",".flv",".wav"],
    archives: ['.zip', '.7z', '.rar', '.tar', '.gz', '.ar', '.iso', ".xz"],
    documents: ['.docx', '.doc', '.pdf', '.xlsx', '.xls', '.odt', '.ods', '.odp', '.odg', '.odf', '.txt', '.ps', '.tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: [".jpg",".jpeg",".gif",".png"]
}

function organizeExecuter(dirPath)
{   
    /* create main folder => OrganizedFiles.  create sub folder for each type under this folder */
    orgDir=dirPath+"/OrganizedFiles"; //base directory
    if (!fs.existsSync(orgDir)){
        fs.mkdirSync(orgDir);
    }
    for(let key in types)
        {
            n_path=path.join(orgDir,key);
            if (!fs.existsSync(n_path))
                fs.mkdirSync(n_path);
        }
    n_path=path.join(orgDir,"other");
    if (!fs.existsSync(n_path))
        fs.mkdirSync(n_path);

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

function locateInFolder(filePath)
{
       
        let extension=path.extname(filePath);
        let filename=path.basename(filePath);
        let flag=false;
        for( let i=0;i<types.media.length;i++)
            if(extension == types.media[i]){ 
            flag=true;
            fs.rename(filePath, orgDir+"/media/"+filename, (err)=>{
                   if(err) throw err;
                    });}
        for( let i=0;i<types.archives.length;i++){ 
            flag=true;
            if(extension == types.archives[i])
                fs.rename(filePath, orgDir+"/archives/"+filename, (err)=>{
                if(err) throw err;
                    });}
        for( let i=0;i<types.documents.length;i++){ 
            flag=true;
            if(extension == types.documents[i])
            fs.rename(filePath, orgDir+"/documents/"+filename, (err)=>{
                   if(err) throw err;
                    });}
        for( let i=0;i<types.app.length;i++)
            if(extension == types.app[i]){ 
                flag=true;
                fs.rename(filePath, orgDir+"/app/"+filename, (err)=>{
                if(err) throw err;
                });}
        for( let i=0;i<types.images.length;i++)
            if(extension == types.images[i]){ 
                flag=true;
                fs.rename(filePath, orgDir+"/images/"+filename, (err)=>{
                if(err) throw err;
                });}
        if(flag==false)
        {
            fs.rename(filePath, orgDir+"/other/"+filename, (err)=>{
                if(err) throw err;
                });
        }

}

function fileOrganizer(dirPath)
{
    if(isFileChecker(dirPath))
    {
        locateInFolder(dirPath);
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