import * as d3 from 'd3'
import * as scales from './scales'
import * as axis from './axis'

export const chartRender = (svgRef: any, 
							data: any[],
							width: number,
							height: number,
							rangeX: number[],
							rangeY: number[],
							logX: boolean,
							logY: boolean,
							showGridX: boolean,
							showGridY: boolean,
							) => {
	// d3.selectAll("svg > *").remove();
	d3.selectAll("#ChartPlot > *").remove();

	//setting up svg
	const svg = d3.select(svgRef.current)
		.attr('width', width)
		.attr('height', height)
		.style('margin-top', '50')
		.style('margin-left', '50')
		.style('background', '#FFFFFF')
		.style('overflow', 'visible');

	//setting the scales
	const xScale = scales.xScale(width, [rangeX[0], rangeX[1]], logX)
	const yScale = scales.yScale(height, [rangeY[0], rangeY[1]], logY)

	//setting the axis
	axis.xAxis(svg, xScale, 10, height, showGridX, '#BDC3C7');
	axis.yAxis(svg, yScale, 10, width, showGridY, '#BDC3C7');

	//settings the data
	svg.append('g')
			.selectAll("dot")
			.data(data)
			.join("circle")
				.attr("cx", d => xScale(d['POROSITY']))
				.attr("cy", d => yScale(d['PERMEABILITY']))
				.attr("r", 5)
				.style("fill", "#E24726")
}
