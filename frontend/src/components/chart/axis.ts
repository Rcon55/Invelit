import * as d3 from 'd3';


export const xAxis = (	svgObj: any, 
						xScale: any, 
						nTicks: number, 
						height: number, 
						showgrid: boolean, 
						color: string,
						) => {
	const xAxis = d3.axisBottom(xScale)
		.ticks(nTicks);

	const xAxisGrid = d3.axisBottom(xScale)
		.tickSize(-height)
		.tickFormat(null)
		.ticks(nTicks);

	svgObj.append('g')
		.call(xAxis)
		.attr("class", "xaxis")
		.attr('transform', `translate(0, ${height})`);

	if (showgrid == true) {
		svgObj.append('g')
			.attr('class', 'x axis-grid')
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxisGrid)
			.style("color", color);
	}

	return(svgObj);
}


export const yAxis = (	svgObj: any, 
						yScale: any, 
						nTicks: number, 
						width: number, 
						showgrid: boolean, 
						color: string,
						) => {
	const yAxis = d3.axisLeft(yScale)
		.ticks(nTicks);

	const yAxisGrid = d3.axisLeft(yScale)
		.tickSize(-width)
		.tickFormat(null)
		.ticks(nTicks);

	svgObj.append('g')
		.attr("class", "yaxis")
		.call(yAxis);

	if (showgrid == true) {
		svgObj.append('g')
			.attr('class', 'y axis-grid')
			.call(yAxisGrid)
			.style("color", color);
	}

	return(svgObj);
}
