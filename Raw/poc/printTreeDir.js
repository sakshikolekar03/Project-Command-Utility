
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



function printTreePath(dirPath)
{ //we can use path.baseName() to get last folder in the path
    let spc="";
    let word=dirPath.split("/");
    for(let i=0;i<word.length-1;i++)
        spc=spc+"-\t";

    if(isFileChecker(dirPath))
        console.log(spc+word[word.length-1]+"*");
    
    else
    {
        console.log(spc+word[word.length-1]);
        let children=readFolderContent(dirPath);

        for(let i=0;i<children.length;i++)
            printTreePath(dirPath+"/"+children[i]);
    }
}

printTreePath("D10");