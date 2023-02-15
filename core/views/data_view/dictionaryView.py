import core.serializers as serializers

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from core.models import DictField

class DictFieldView(APIView):
	serializer_class = serializers.DictFieldSerializer
	def get(self, request, format=None):
		dictfield = DictField.objects.all()
		serializer = self.serializer_class(dictfield, many=True)
		return(Response(serializer.data, status=status.HTTP_200_OK))