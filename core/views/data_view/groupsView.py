import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.models import Groups


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