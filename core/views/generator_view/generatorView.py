import core.serializers as serializers
from django.db import transaction

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.app.generators.collector import generate

class GeneratorView(APIView):
	@transaction.atomic
	def post(self, request, format=None):
		username = request.user.username
		dataset = request.data['dataset']
		description = request.data['description']
		gen_model = request.data['model']

		number_of_samples = int(request.data['number_of_samples'])
		settings = request.data['settings']
		
		try:
			#Создаем группу образцов
			group = None
			serializer = serializers.GroupsSerializer(
				data=generate('create_group',
				{	'name': dataset, 
					'autor': username, 
					'description': description,
					'origin': 0}), many=True)

			if serializer.is_valid():
				serializer.save()
				group = serializer.data[0]['group_id']
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))


			#Создаем образцы
			samples_list = []
			serializer = serializers.SamplesSerializer(
				data=generate('create_samples',
				{	'n': number_of_samples, 
					'autor': username, 
					'group': group}), many=True)

			if serializer.is_valid():
				serializer.save()
				[samples_list.append(field['sample_id']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))


			#Создаем эксперименты
			experiments_list = []
			serializer = serializers.ExperimentsSerializer(
				data=generate('create_experiments', 
				{	'samples': samples_list,
					'experiment_type': 'FES'}), many=True)

			if serializer.is_valid():
				serializer.save()
				[experiments_list.append(field['experiment_id']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			#Создаем свойства
			serializer = serializers.PropertiesSerializer(
				data=generate('create_fes', 
				{	'experiments': experiments_list,
					'settings': settings}), many=True)

			if serializer.is_valid():
				serializer.save()
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			return(Response(status=status.HTTP_201_CREATED))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))