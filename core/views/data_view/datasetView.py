import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.models import Samples, Experiments, Properties, Groups
from core.actions.group_bundle import update_group_bundle

class DatasetView(APIView):
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

	def post(self, request, format=None):
		return(update_group_bundle(request.data))
