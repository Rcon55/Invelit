export type DatasetHeaderType = {name: string, comment: string}

export type ExponentialModelProperties = {
	numberOfSamples: number,
	medianPorosity: number,
	deviationPorosity: number,
	t1Porosity: number,
	t2Porosity: number,
	t1Permeability: number,
	t2Permeability: number,
	deviationPermeability: number,
}