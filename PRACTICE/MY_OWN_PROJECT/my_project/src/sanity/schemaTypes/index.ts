import { type SchemaTypeDefinition } from 'sanity'
import { personalinfo } from './personal'
import { options } from './opt'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    personalinfo,options
  ],
}
