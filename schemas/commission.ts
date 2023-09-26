import { defineType } from "sanity";

export default defineType({
	name:'commission',
	type:'object',
	fields:[
		{
			name:'title',
			type:'string',
		},
		{
			name:'detail',
			type:'string'
		},
		{
			name:'price',
			type:'number'
		},{
			name:'sample_big',
			title:'Sample Image [Large]',
			type:'image'
		},{
			name:'sample_small',
			title:'Sample Image [Small]',
			type:'image'
		}
	]
})