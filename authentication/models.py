from django.db import models

from datetime import datetime, timedelta

import jwt
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core import validators
from django.conf import settings
from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
	username = models.CharField(db_index=True, max_length=255, unique=True)
	email = models.EmailField(max_length=254, validators=[validators.validate_email], unique=True, blank=False)
	first_name = models.CharField(max_length=50, blank=True)
	last_name = models.CharField(max_length=50, blank=True)
	is_staff = models.BooleanField(default=False)
	is_active = models.BooleanField(default=True)
	
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ('username',)

	objects = UserManager()

	def __str__(self) -> str:
		return super().__str__(self.username)
	
	@property
	def token(self):
		return(self._generate_jwt_token)

	def get_full_name(self):
		#Нужно доделать позже
		return(self.last_name)

	def get_short_name(self):
		#Нужно доделать позже
		return(self.last_name)

	def _generate_jwt_token(self):
		#Срок жизни токена
		dt = datetime.now() + timedelta(days=30)

		token = jwt.encode({
			'id': self.pk,
			'exp': int(dt.strftime('%s'))
		}, settings.SECRET_KEY, algorithm='HS256')

		print(token)
		return(token)
		# return(token.decode('utf-8'))

