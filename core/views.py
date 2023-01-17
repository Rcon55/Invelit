from core.serializers import SamplesSerializer, DictFieldSerializer, ExperimentsSerializer, PropertiesSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Samples, DictField, Experiments, Properties

from core.app.generators.collector import generate

class SamplesView(APIView):
	serializer_class = SamplesSerializer

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

class PropertiesView(APIView):
	serializer_class = PropertiesSerializer

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
	serializer_class = ExperimentsSerializer

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
	serializer_class = DictFieldSerializer
	def get(self, request, format=None):
		dictfield = DictField.objects.all()
		serializer = self.serializer_class(dictfield, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))
			

class GeneratorView(APIView):
	def post(self, request, formmat=None):
		gen_model = request.data['model']
		samples_list = []
		experiments_list = []
		try:
			serializer = SamplesSerializer(data=generate(gen_model), many=True)
			if serializer.is_valid():
				serializer.save()
				[samples_list.append(field['SAMPLE_ID']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			experiments_data = generate('create_experiments', {'SAMPLES': samples_list})
			serializer = ExperimentsSerializer(data=experiments_data, many=True)
			if serializer.is_valid():
				serializer.save()
				[experiments_list.append(field['EXPERIMENT_ID']) for field in serializer.data]
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))

			fes_data = generate('create_fes', {'EXPERIMENTS': experiments_list})
			serializer = PropertiesSerializer(data=fes_data, many=True)
			if serializer.is_valid():
				serializer.save()
			else:
				return(Response(status=status.HTTP_400_BAD_REQUEST))


			return(Response(status=status.HTTP_201_CREATED))
		except:
			raise(Response(status=status.HTTP_400_BAD_REQUEST))