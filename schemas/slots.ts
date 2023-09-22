import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'slots',
  title: 'Slots',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Preset ID',
	  description: "Set the one you want to use to 'main'",
      type: 'string',
    }),
	defineField({
		name:'images',
		title:'Images List',
		type:'array',
		of:[
			{
				name:'image',
				type:'image'
			}
		]
	})
]
})
