import pandas as pd
import numpy as np
from core.app.generators.basics import Methods

class PorosityGen:
	def __init__(self, experiments_list: list, settings: dict) -> None:
		self.experiments_list = experiments_list
		self.df = pd.DataFrame(columns=['experiment', 'porosity', 'density'])
		self.dev_porosity = settings['deviationPorosity']
		self.medium_porosity = settings['medianPorosity']

	def random_normal(self, mu, sigma):
		res = mu + sigma * np.random.randn() / np.pi
		if res > 0:
			return(res)
		else:
			self.random_normal(mu, sigma)

	def calc_density(self, por):
		return(self.skelet_density - por * (self.skelet_density - 1))

	def init_model(self):
		self.skelet_density = 2.7

	def create_porosity(self):
		self.init_model()
		for experiment in self.experiments_list:
			por = self.random_normal(self.medium_porosity, self.dev_porosity)
			dens = self.calc_density(por)
			self.df.loc[len(self.df)] = [experiment, por, dens]

		return(Methods.get_json(self.df))


class PermeabilityGen(PorosityGen):
	def __init__(self, experiments_list: list, settings: dict) -> None:
		super().__init__(experiments_list, settings)
		self.create_porosity()
		self.df['permeability'] = self.df['porosity']

		self.min_p = settings['t1Porosity']
		self.max_p = settings['t2Porosity']
		self.min_k = settings['t1Permeability']
		self.max_k = settings['t2Permeability']
		self.sigma = settings['deviationPermeability']
	
	def lin_log(self, por):
		perm = self.min_k + (por - self.min_p) * (np.log(self.max_k) - np.log(self.min_k)) / (self.max_p - self.min_p)
		perm = np.exp(perm + self.sigma * np.random.randn() / np.pi)
		return(perm)
	
	def create_permeability(self):
		self.df['permeability'] = self.df['porosity'].apply(self.lin_log)
		return(Methods.get_json(self.df))
