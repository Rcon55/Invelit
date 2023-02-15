import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.models import Storage


class StorageView(APIView):
	serializer_class = serializers.StorageSerializer

	def get(self, request, format=None):
		public_storage = Storage.objects.filter(public = True)
		serializer = self.serializer_class(public_storage, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))