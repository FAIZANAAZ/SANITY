import { title } from "process";


export const data={
        title:"Hero schema",
        name:"hero",
        type:"document",
        fields:[
            {
                title:"NAME",
                name:"heading",
                type:"string"
            },
            {
                title:"Description",
                name:"desc",
                type:"string"
            },
            {
                title: "BUTTON",
                name: "btn",
                type:"string"
            },{
                title:"PICTURE",
                name:"pic",
                type:"image",
                options: {
                    hotspot: true // <-- Defaults to false
                  },
                fields:[
                    {
                        title:"alt pic",
                        name:"alt",
                        type:"string"
                    }
                ]
            }
        ],
       
    }
