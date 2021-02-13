let {helpfn}=require("./Commands/help.js");
let vObj=require("./Commands/view.js");
let {orgFun}=require("./Commands/organize.js"); //this name should be same as in the file's object's key
//othe way is:
//let helpObject= require("./Commands/help.js");
//helpObject.helpfn()

let inp=process.argv.slice(2);
let cmd=inp[0];

switch(cmd)
{
    case "view": 
            let folderName=inp[1];
            let varMode=inp[2];
            vObj.viewFn(folderName,varMode);
        break;
    case "help": 
            helpfn();
        break;
    case "organize": 
            let dirPath;
            if(inp[1]==undefined)
                dirPath=__dirname;
            else
                dirPath=inp[1];
            orgFun(dirPath);
        break;
    default:
            console.log("wrong command input")
        break;
}