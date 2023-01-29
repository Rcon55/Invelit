import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Samples, DictField, Experiments, Properties, Groups, Storage

from core.app.generators.collector import generate

class DataPackView(APIView):
	def get(self, request, format=None):
		bundle = {}
		group = request.query_params['group_id']

		#Load group
		groups = Groups.objects.filter(group_id = group)
		serializer = serializers.GroupsSerializer(groups, many=True)
		bundle['groups'] = serializer.data

		#Load samples
		samples = Samples.objects.filter(group = group)
		serializer = serializers.SamplesSerializer(samples, many=True)
		bundle['samples'] = serializer.data

		samples_list = [item['sample_id'] for item in serializer.data]

		#Load experiments
		experiments = Experiments.objects.filter(sample__in = samples_list)
		serializer = serializers.ExperimentsSerializer(experiments, many=True)
		bundle['experiments'] = serializer.data

		experiments_list = [item['experiment_id'] for item in serializer.data]

		#Load properties
		properties = Properties.objects.filter(experiment__in = experiments_list)
		serializer = serializers.PropertiesSerializer(properties, many=True)
		bundle['properties'] = serializer.data

		return(Response(bundle, status=status.HTTP_200_OK))


class SamplesView(APIView):
	serializer_class = serializers.SamplesSerializer

	def get(self, request, format=None):
		samples = Samples.objects.all()
		serializer = self.serializer_class(samples, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))

	def post(self, request, format=None):
		print(type(request.data))
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return(Response(serializer.data, status=status.HTTP_201_CREATED))
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		PKeys = request.data
		try:
			for object in [Samples.objects.get(pk=key) for key in PKeys]:
				object.delete()
			return(Response(status=status.HTTP_204_NO_CONTENT))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))
class GroupsView(APIView):
	serializer_class = serializers.GroupsSerializer

	def get(self, request, format=None):
		groups = Groups.objects.all()
		serializer = self.serializer_class(groups, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))

	def delete(self, request, format=None):
		key = request.query_params['key']
		try:
			Groups.objects.get(pk=key).delete()
			return(Response(status=status.HTTP_204_NO_CONTENT))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))

class StorageView(APIView):
	serializer_class = serializers.StorageSerializer

	def get(self, request, format=None):
		public_storage = Storage.objects.filter(public = True)
		serializer = self.serializer_class(public_storage, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))


class PropertiesView(APIView):
	serializer_class = serializers.PropertiesSerializer

	def get(self, request, format=None):
		properties = Properties.objects.all()
		serializer = self.serializer_class(properties, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))

	def post(self, request, format=None):
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return(Response(serializer.data, status=status.HTTP_201_CREATED))
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		PKeys = request.data
		try:
			for object in [Properties.objects.get(pk=key) for key in PKeys]:
				object.delete()
			return(Response(status=status.HTTP_204_NO_CONTENT))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))

class ExperimentsView(APIView):
	serializer_class = serializers.ExperimentsSerializer

	def get(self, request, format=None):
		experiments = Experiments.objects.all()
		serializer = self.serializer_class(experiments, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))

	def post(self, request, format=None):
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return(Response(serializer.data, status=status.HTTP_201_CREATED))
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, format=None):
		PKeys = request.data
		try:
			for object in [Experiments.objects.get(pk=key) for key in PKeys]:
				object.delete()
			return(Response(status=status.HTTP_204_NO_CONTENT))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))

class DictFieldView(APIView):
	serializer_class = serializers.DictFieldSerializer
	def get(self, request, format=None):
		dictfield = DictField.objects.all()
		serializer = self.serializer_class(dictfield, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))
			

class GeneratorView(APIView):
	def post(self, request, formmat=None):
		gen_model = request.data['model']
		description = request.data['description']
		group_name = request.data['group_name']
		number_of_samples = int(request.data['number_of_samples'])
		username = request.user.username
		samples_list = []
		experiments_list = []
		group = None
		try:
			#Создаем группу образцов
			serializer = serializers.GroupsSerializer(data=generate('create_group',
				{	'name': group_name, 
					'autor': username, 
					'description': description,
					'origin': 0}), many=True)
			if serializer.is_valid():
				serializer.save()
				group = serializer.data[0]['group_id']
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			#Создаем образцы
			serializer = serializers.SamplesSerializer(data=generate('create_samples',
				{	'n': number_of_samples, 
					'autor': username, 
					'group': group}), many=True)
			if serializer.is_valid():
				serializer.save()
				[samples_list.append(field['sample_id']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			#Создаем эксперименты
			experiments_data = generate('create_experiments', 
			{	'samples': samples_list,
				'experiment_type': 'FES'})
			serializer = serializers.ExperimentsSerializer(data=experiments_data, many=True)
			if serializer.is_valid():
				serializer.save()
				[experiments_list.append(field['experiment_id']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			#Создаем свойства
			fes_data = generate('create_fes', {'experiments': experiments_list})
			serializer = serializers.PropertiesSerializer(data=fes_data, many=True)
			if serializer.is_valid():
				serializer.save()
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))


			return(Response(status=status.HTTP_201_CREATED))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))