export const hero ={
    
        title: 'HERO SCHEMA',
        name: 'hero',
        type: 'document',
        fields: [
          {
            title: 'HEADING',
            name: 'heading',
            type: 'string'
          },
          {
            title: 'DESCRIPTION',
            name: 'desc',
            type: 'string'
          },
          {
            title: 'Card Image',
            name: 'image',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
            // ye zarori nhi he lekin dena chiye alt likhny ke liye
              {
                title: 'Picture alt',
                name: 'alt',
                type: 'string',
                
              }
            ]
          },
          {
            title: 'Card Image 2',
            name: 'imageTwo',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
            // ye zarori nhi he lekin dena chiye alt likhny ke liye
              {
                title: 'Picture alt_Two',
                name: 'altTwo',
                type: 'string',
                
              }
            ]
          }]
}