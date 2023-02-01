from django.db import transaction
from rest_framework.response import Response
from rest_framework import status

from core.serializers import *
from core.models import Groups

def setValue(dict):
	def setter(key, value):
		dict[key] = value
	return(setter)

@transaction.atomic
def update_group_bundle(bundle):
	object = Groups.objects.filter(pk = bundle['groups'][0]['group_id'])
	object.delete()

	try:
		group_id = save_group(bundle['groups'])
		samples_dict = save_samples(bundle['samples'], group_id)
		experiments_dict = save_experiments(bundle['experiments'], samples_dict)
		save_properties(bundle['properties'], experiments_dict)
		return(Response(status=status.HTTP_201_CREATED))
	except:
		raise(Response(status=status.HTTP_400_BAD_REQUEST))


def save_group(data):
	serializer = GroupsSerializer(data=data, many=True)
	if serializer.is_valid():
		serializer.save()
		return(serializer.data[0]['group_id'])
	else:
		return(serializer.error_messages)
		
def save_samples(data, group):
	prev_id = {}
	set_prev = setValue(prev_id)
	for i in range(len(data)):
		data[i]['group'] = group
		set_prev(data[i]['name'], data[i]['sample_id'])


	serializer = SamplesSerializer(data=data, many=True)
	if serializer.is_valid():
		serializer.save()

		# Создаем словарь для изменения sample_id 
		rename_id_dict = {}
		set_dict = setValue(rename_id_dict)
		[set_dict(prev_id[field['name']], field['sample_id']) for field in serializer.data]
		return(rename_id_dict)

def save_experiments(data, samples_dict):
	prev_id = {}
	set_prev = setValue(prev_id)
	for i in range(len(data)):
		data[i]['sample'] = samples_dict[data[i]['sample']]
		set_prev(data[i]['name'], data[i]['experiment_id'])

	serializer = ExperimentsSerializer(data=data, many=True)
	if serializer.is_valid():
		serializer.save()

		# Создаем словарь для изменения sample_id 
		rename_id_dict = {}
		set_dict = setValue(rename_id_dict)
		[set_dict(prev_id[field['name']], field['experiment_id']) for field in serializer.data]
		return(rename_id_dict)

def save_properties(data, experiments_dict):
	for i in range(len(data)):
		data[i]['experiment'] = experiments_dict[data[i]['experiment']]

	serializer = PropertiesSerializer(data=data, many=True)
	if serializer.is_valid():
		serializer.save()
