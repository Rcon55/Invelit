import pandas as pd
import string
import random
import json
from datetime import datetime
from django.utils import timezone

class Methods:
	@staticmethod
	def random_name():
		return('{}{}-{}'.format(	random.choice(string.ascii_letters),
									random.choice(string.ascii_letters),
									random.randint(1000, 9999)))

	@staticmethod
	def get_json(DataFrame: pd.DataFrame):
		return(json.loads(DataFrame.to_json(orient="records")))

class GroupGen:
	def __init__(self, name: str, autor: str, description, origin) -> None:
		self.df = pd.DataFrame(	[[name, autor, description, origin]], 
								columns=['name', 'autor', 'description', 'origin'])
	
	def generate_group(self) -> json:
		json_file = Methods.get_json(self.df)
		return(json_file)


 
class SamplesGen:
	def __init__(self, n: int, autor: str, group: int) -> None:
		self.n = n
		self.autor = autor
		self.group = group
		self.df = pd.DataFrame(columns=['name', 'group', 'area', 'field', 'uwi', 'well', 'autor'])

	def generate_samples(self) -> json:
		area = Methods.random_name()
		field = Methods.random_name()
		uwi = 'S_'+ str(random.randint(1000000, 9999999))
		well = 'S_'+ str(random.randint(100, 99999))
		autor = self.autor
		group = self.group

		for i in range(self.n):
			name = '{}_GEN'.format(i)
			self.df.loc[len(self.df)] = [name, group, area, field, uwi, well, autor]

		json_file = Methods.get_json(self.df)
		return(json_file)


class ExperimentsGen:
	def __init__(self, samples: list, experiment_type: str) -> None:
		self.samples = samples
		self.experiment_type = experiment_type
		self.df = pd.DataFrame(columns=['name', 'experiment_type', 'description', 'sample', 'date'])

	def _create_information(self):
		if self.experiment_type == 'FES':
			self.type = 'Исследования ФЕС'
			self.description = """Сгенерированные исследования ФЕС 
			по методу случайного нормального распределения"""
		else:
			self.type = 'Неизвестно'
			self.description = 'Неизвестно'

	def generate_experiments(self) -> json:
		self._create_information()
		date = str(timezone.now())
		for sample in self.samples:
			name = Methods.random_name()
			self.df.loc[len(self.df)] = [name, self.type, self.description, sample, date]
		
		json_file = Methods.get_json(self.df)
		return(json_file)
