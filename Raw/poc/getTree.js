let root={
    name:"D10",
    children:[
        {
            name:"D20",
            children:[
                {
                    name:"D50",
                    children:[]
                },
                {
                    name:"D60",
                    children:[]
                }
            ]
        },
        {
            name:"D30",
            children:[
                {
                    name:"D70",
                    children:[]
                },
                {
                    name:"D80",
                    children:[
                        {
                            name:"D110",
                            children:[]
                        }
                    ]
                },
                {
                    name:"D90",
                    children:[]
                }
            ]
        },
        {
            name:"D40",
            children:[]
        },
    ]
};

printPath(root);
function printPath(root)
{
    let meNmyFamily=root.name+"-> ";
    for(let i=0;i<root.children.length;i++)
    {
        meNmyFamily+=root.children[i].name+", ";
    }
    console.log(meNmyFamily);
    for(let i=0;i<root.children.length;i++)
    {
        printPath(root.children[i]);
    }

};
