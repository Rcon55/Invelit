import numpy as np
import pandas as pd
import string
import random
import json

class SamplesGen():
	def __init__(self, n: int) -> None:
		self.n = n
		self.df = pd.DataFrame(columns=['NAME', 'AREA', 'FIELD', 'UWI', 'WELL', 'AUTOR'])
	
	def random_name(self) -> str:
		return('{}{}-{}'.format(	random.choice(string.ascii_letters),
									random.choice(string.ascii_letters),
									random.randint(1000, 9999)))

	def generate(self) -> pd.DataFrame:
		area = self.random_name()
		field = self.random_name()
		uwi = 'S_'+ str(random.randint(1000000, 9999999))
		well = 'S_'+ str(random.randint(100, 99999))
		autor = 'Random'

		for i in range(self.n):
			name = '{}_GEN'.format(i)
			self.df.loc[len(self.df)] = [name, area, field, uwi, well, autor]

		return(self.df)

	def get_json(self):
		return(json.loads(self.df.to_json(orient="records")))

class FES_simple(SamplesGen):
	def __init__(self, samples) -> None:
		super().__init__()
		self.samples = samples
		self.skelet_density = 2.7

	def porosity(self) -> list:
		pass

def generate(model:string):
	if model == 'create_samples':
		Samples = SamplesGen(10)
		Samples.generate()
		res = Samples.get_json()
	return(res)
