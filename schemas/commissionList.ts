import { defineField, defineType } from "sanity";

export default defineType({
	name:'commissionList',
	title:"Commission",
	type: 'document',
	fields:[
		defineField({
			name:'id',
			title:'Preset Id',
			description:`Set the preset you want to use as 'main'`,
			type: 'string',
		}),
		defineField({
			name:'commission',
			type:'array',
			of:[
				{
					type:'commission',
				}
			]
		})
	]
})