import { defineField, defineType } from "sanity";


export default defineType(
	{
		name:'book',
		title:'Book',
		type:'document',
		fields: [
			defineField({
			  name: 'id',
			  title: 'Preset ID',
			  description: "Set the one you want to use to 'main'",
			  type: 'string',
			}),
			defineField({
				name:'book_pages',
				title:'Page List',
				type:'array',
				of:[
					{
						name:'book_page',
						title:'Page',
						type:'object',
						fields:[
							defineField(
								{
									name:'front_page',
									title:'Front Page',
									type:'page'
								}
							),
							defineField(
								{
									name:'back_page',
									title:'Back Page',
									type:'page'
								}
							)
							
						],
						preview: {
							select: {
							  frontNote: 'front_page.top.title',
							  backNote: 'back_page.bottom.title',
							  image: 'front_page.top.image'
							},
							prepare: ({frontNote,backNote,image})=>{
								return {
									title:`Page [${frontNote}] ${backNote ? ` - [${backNote}]` : '' }`,
									media: image 
								}
							},
						}
					}
				]
			})
		]
	}
)