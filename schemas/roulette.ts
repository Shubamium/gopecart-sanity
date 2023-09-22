import { defineField, defineType } from "sanity";


export default defineType({
	name:'roulette',
	type:'document',
	fields:[
		defineField({
			name:'id',
			title:'Preset ID',
			description:`Set the one you want to use as 'main'`,
			type:'string',
		}),
		defineField({
			name:'images',
			title:'Image List',
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