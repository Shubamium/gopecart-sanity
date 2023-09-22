import { defineField, defineType } from "sanity"


export default defineType({
	name:'page',
	type:'object',
	
	fields:[
		defineField({
			name:'top',
			title:'Top Section',
			type:'object',
			fields:[
				defineField({
					name:'image',
					type:'image',
				}),
				defineField(
					{
						name:'title',
						type:'string',
					}
				),
				defineField({
					name:'description',
					type:'array',
					of:[
						{type:'block'}
					]

				}),
			],
		}),
		defineField({
			name:'bottom',
			title:'Bottom Section',
			type:'object',
			fields:[
				defineField({
					name:'image',
					type:'image'
				}),
				defineField({
					name:'title',
					type:'string'
				}),
				defineField({
					name:'description',
					type:'array',
					of:[
						{type:'block'}
					]
				})
			]
		})
	],	
	
})