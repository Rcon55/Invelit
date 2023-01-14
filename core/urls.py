from django.urls import path

from .views import SamplesView, DictFieldView, GeneratorView

urlpatterns = [
    path('samples/', SamplesView.as_view()),
    path('getdicttables/', DictFieldView.as_view()),
    path('gen/', GeneratorView.as_view()),
]