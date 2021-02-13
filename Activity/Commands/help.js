function helpExecuter()
{
    console.log(`List of all commands:
    1.view
        a.--flat
        b.--tree
        Syntax: node mycli.js view folder_name <mode>   [where, mode: --flat / --tree]
    2.organize
        Syntax: node mycli.js organize [folder_name]   [where, folder_name is optional]
    3.help
        Syntax: node mycli.js help
    `);
    console.log("\n[STATUS]: help command executed successfully...");
    console.log("-------------------------------------------------------------------------------------------");
};


module.exports={
    helpfn:helpExecuter
}