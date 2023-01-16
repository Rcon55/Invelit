from core.app.generators.basics import SamplesGen, ExperimentsGen
from core.app.generators.fes import PermeabilityGen

def generate(model:str, props = None):
	result = None
	if model == 'create_samples':
		Samples = SamplesGen(10)
		result = Samples.generate_samples()
	elif model == 'create_experiments':
		Experiments = ExperimentsGen(props['SAMPLES'], 'FES')
		result = Experiments.generate_experiments()
	elif model == 'create_fes':
		FES = PermeabilityGen(props['EXPERIMENTS'])
		result = FES.create_permeability()
	return(result)