from django.conf import settings
from .models import User
from rest_framework import authentication, exceptions
import jwt


class JWTAuthentication(authentication.BaseAuthentication):
	authentication_header_prefix = 'Bearer'

	def authenticate(self, request):
		request.user = None

		# `auth_header` должен состоять из двух элементов: 
		# 	1) Имени в заголовке (в нашем случае, "Token")
		# 	2) JWT, который мы должны авторизовать.
		auth_header = authentication.get_authorization_header(request).split()
		auth_header_prefix = self.authentication_header_prefix.lower()


		if not auth_header:
			return None

		if len(auth_header) == 1:
			# Некорректный заголовок. Предоставлены не все данные
			return None

		elif len(auth_header) > 2:
			# Некорректный заголовок. Токен не должен содержать пробелов
			return None

		# Тут нужно расшифровать токен для работы библиотеки 
		prefix = auth_header[0].decode('utf-8')
		token = auth_header[1].decode('utf-8')

		if prefix.lower() != auth_header_prefix:
			# Неправильный заголовок
			return None

		return self._authenticate_credentials(request, token)

	def _authenticate_credentials(self, request, token):
		try:
			payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
		except:
			msg = 'Invalid authentication. Could not decode token.'
			raise exceptions.AuthenticationFailed(msg)

		try:
			user = User.objects.get(pk=payload['id'])
		except User.DoesNotExist:
			msg = 'No user matching this token was found.'
			print(msg)
			raise exceptions.AuthenticationFailed(msg)

		if not user.is_active:
			msg = 'This user has been deactivated.'
			print(msg)
			raise exceptions.AuthenticationFailed(msg)

		return (user, token)