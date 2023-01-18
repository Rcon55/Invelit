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

	React.useEffect(() => {
		chartRender(
			svgRef,
			data,
			600,
			600,
			[0, 0.4],
			[1, 10000],
			false,
			true,
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