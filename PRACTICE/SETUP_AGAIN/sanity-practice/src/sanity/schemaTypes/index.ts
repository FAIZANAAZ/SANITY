import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: 'Hero Schema', // screen pe dekhny wala name
      name: 'hero', // sanity jis ko name sy pechanti hai
      type: 'document', // input box ki help sy document ready karta hai
      fields: [
        {
          title: 'Heading', // screen input ki heading hai
          name: 'heading', // sanity isko is name sy pehcany gya
          type: 'string', // data type of input box
        },
        {
          title: 'Description', // screen input ki heading hai
          name: 'desc', // sanity isko is name sy pehcany gya
          type: 'string', // data type of input box
        },
        {
          title: 'Button 1 Text', // screen input ki heading hai
          name: 'btnOne', // sanity isko is name sy pehcany gya
          type: 'string', // data type of input box
        },
        {
          title: 'Poster', // screen input ki heading hai
          name: 'heroPic', // sanity isko is name sy pehcany gya
          type: 'image', // data type of input box
          options: {
            hotspot: true, // <-- Defaults to false
          },
          fields: [
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
    },
  ],
};
