from core.app.generators.basics import SamplesGen, ExperimentsGen, GroupGen
from core.app.generators.fes import PermeabilityGen

def generate(model:str, props = None):
	result = None
	
	if model == 'create_samples':
		Samples = SamplesGen(props['n'], props['autor'], props['group'])
		result = Samples.generate_samples()

	elif model == 'create_experiments':
		Experiments = ExperimentsGen(props['samples'], 'fes')
		result = Experiments.generate_experiments()

	elif model == 'create_fes':
		FES = PermeabilityGen(props['experiments'], props['settings'])
		result = FES.create_permeability()

	elif model == 'create_group':
		Group = GroupGen(props['name'], props['autor'], props['description'], props['origin'])
		result = Group.generate_group()

	return(result)