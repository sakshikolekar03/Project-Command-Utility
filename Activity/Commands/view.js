let fs=require("fs");
function viewExecuter(folderName,varMode)
{
    console.log("folder name: ",folderName," mode: ",varMode);
    if(varMode=="--flat")
    {
        displayFlat(folderName);
    }
    else if(varMode=="--tree")
    {
        displayTree(folderName);
    }
    else
    {
        console.log("[WARNING]: mode should be --flat or --tree");
    }

    console.log("[STATUS]: view command executed successfully...");
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



/*--------------------------------------------
/ Display folder structur in flat format
-------------------------------------------*/

function displayFlat(directoryPath)
{
    printFlatPath(directoryPath);
    console.log("\n[STATUS]: flat display is done. ");
};

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



/*--------------------------------------------
/ Display folder structur in tree format
-------------------------------------------*/

function displayTree(directoryPath)
{
    
    printTreePath(directoryPath);
    console.log("\n[STATUS]: tree display is done");
};


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






module.exports={
viewFn: viewExecuter
};