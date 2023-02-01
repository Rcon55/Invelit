from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path, re_path

from .views import RegistrationAPIView, LoginAPIView#, registration_page

urlpatterns = [
    path('login/', LoginAPIView.as_view(), name='login'),
    re_path('registration/', RegistrationAPIView.as_view(), name='user_registration'),
]