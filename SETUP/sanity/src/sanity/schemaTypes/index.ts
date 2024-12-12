import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {title:"Personal Info",//screen name
      name:"pInfo",//query name
      type:"document",//type
      fields: [//input boxes
        {
          title:"Your Name",//screen name
      name:"name",//query name
      type:"string",//datatype
        },
        {
          title:"Last Name",//screen name
      name:"fullname",//query name (ye same nhi hona chiye)
      type:"string",//datatype
        },
        {
          title:"Gender",//screen name
      name:"gender",//query name (ye same nhi hona chiye)
      type:"string",//datatype
        }
      ]
    }
  ],
}

