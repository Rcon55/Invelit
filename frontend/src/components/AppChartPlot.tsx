import * as React from 'react'
import { chartRender } from './chart/scatterplot'
import * as d3 from 'd3'
import { useTypedSelector } from '../hooks/typedHooks'


const PlotMenu = () => {
	return(
		<div>
			Menu
		</div>
	)
}

const AppChartPlot = () => {
	const svgRef = React.useRef()

	const data = useTypedSelector(state => state.data.properties);
	const vis = useTypedSelector(state => state.vis)

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
		<div>
			<PlotMenu />
			<svg id="ChartPlot" ref={svgRef} />
		</div>
	)
}

export default AppChartPlot