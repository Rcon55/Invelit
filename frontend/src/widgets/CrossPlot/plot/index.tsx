import React from 'react'

import { useTypedSelector } from '../../../entities';
import { chartRender } from './scatterplot';
import { useState } from 'react';

export const Plot = () => {
	const svgRef = React.useRef();
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth, 
		height: document.documentElement.clientHeight});
	
	const data = useTypedSelector(state => state.data.properties);
	const vis =  useTypedSelector(state => state.chart.crossPlotVis);
 
	React.useEffect(() => {
		const coord = document.getElementById('ChartPlot').getBoundingClientRect();
		chartRender(
			svgRef,
			data,
			Math.min(Math.max(size.width - coord.left - 100, 100), size.width * 0.66 - 100),
			Math.max(size.height - coord.top - 100, 100), 
			[vis.axises.horizontal.main.min, vis.axises.horizontal.main.max],
			[vis.axises.vertical.main.min, vis.axises.vertical.main.max],
			vis.axises.horizontal.main.log,
			vis.axises.vertical.main.log,
			true,
			true,
		);

		//Пропуск непрерывных рендеров при изменении размеров окна браузера
		let timeout:any;
		function handleResize() {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				setSize({height: window.innerHeight, width: window.innerWidth})
			  }, 200);
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener("resize", handleResize);		
	});
	
	return (
		<svg id="ChartPlot" ref={svgRef}/>
	)
}
