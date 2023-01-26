import React from 'react'
import * as d3 from 'd3'

import { useTypedSelector } from '../../../entities';
import { chartRender } from './scatterplot';

export const Plot = () => {
	const svgRef = React.useRef()

	const data = useTypedSelector(state => state.data.properties);
	const vis = useTypedSelector(state => state.chart)

	React.useEffect(() => {
		chartRender(
			svgRef,
			data,
			600,
			600,
			[vis.min_x, vis.max_x],
			[vis.min_y, vis.max_y],
			vis.log_x,
			vis.log_y,
			true,
			true,
		)
	return () => {
		d3.selectAll("ChartPlot").remove();
	}
	})
	
	return (
		<svg id="ChartPlot" ref={svgRef} />
	)
}
