
let fs=require("fs");

function isFileChecker(dirPath)
{
        return fs.lstatSync(dirPath).isFile();
}

function readFolderContent(dirPath)
{
    //fs.readdirSync(dirPath) returns array of folder/fil names in current folder/dirPath
    return fs.readdirSync(dirPath); //if many files then stack prob then use Asynch functiom
}



function printFlatPath(dirPath)
{
    if(isFileChecker(dirPath))
    {
        console.log(dirPath+"*");
    }
    else
    {
        console.log(dirPath);

        let children=readFolderContent(dirPath);

        for(let i=0;i<children.length;i++)
        {
            printFlatPath(dirPath+"/"+children[i]);
        }
    }
}

printFlatPath("D10");