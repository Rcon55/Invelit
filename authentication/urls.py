from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path, re_path

from .views import RegistrationAPIView, LoginAPIView#, registration_page

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    # path('logout/', LogoutView.as_view(), name='logout'),
    re_path(r'^registration/?$', RegistrationAPIView.as_view(), name='user_registration'),
    # re_path(r'^login/?$', LoginAPIView.as_view(), name='user_login'),

    # path('create/', registration_page),
]
