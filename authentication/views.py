from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django.shortcuts import render

from .models import User
from .serializers import LoginSerializer
from .serializers import RegistrationSerializer

# def registration_page(request):
# 	if request.method == 'POST':
# 		form = 
# 	return(render(request, 'authentication/registration.html'))

class RegistrationAPIView(APIView):
	permission_classes = [AllowAny]
	serializer_class = RegistrationSerializer

	def post(self, request):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		serializer.save()

		return Response(
			{
				'token': serializer.data.get('token', None),
			},
			status=status.HTTP_201_CREATED,
		)


class LoginAPIView(APIView):
	permission_classes = [AllowAny]
	serializer_class = LoginSerializer

	def post(self, request):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)

		return Response(serializer.data, status=status.HTTP_200_OK)