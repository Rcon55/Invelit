import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.models import Experiments


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