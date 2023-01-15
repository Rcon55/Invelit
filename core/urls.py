from django.urls import path

from .views import SamplesView, DictFieldView, GeneratorView, ExperimentsView

urlpatterns = [
    path('samples/', SamplesView.as_view()),
    path('experiments/', ExperimentsView.as_view()),
    path('getdicttables/', DictFieldView.as_view()),
    path('gen/', GeneratorView.as_view()),
]