import * as d3 from 'd3';

export const xScale = (width: number, ranges: number[], logScale: boolean) => {
	let Scale;
	if (logScale == false) {
		Scale = d3.scaleLinear()
			.domain([ranges[0], ranges[1]])
			.range([0, width])
	} else {
		Scale = d3.scaleLog()
			.domain([ranges[0], ranges[1]])
			.range([0, width])
	}
	return(Scale)
}

export const yScale = (height:number , ranges: number[], logScale: boolean) => {
	let Scale;
	if (logScale == false) {
		Scale = d3.scaleLinear()
			.domain([ranges[0], ranges[1]])
			.range([height, 0]);
	} else {
		Scale = d3.scaleLog()
			.domain([ranges[0], ranges[1]])
			.range([height, 0]);
	}
	return(Scale) 
}

