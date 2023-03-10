from django.urls import path

from .views import * 

urlpatterns = [
    path('datapack/', DatasetView.as_view()),
    path('samples/', SamplesView.as_view()),
    path('groups/', GroupsView.as_view()),
    path('storage/', StorageView.as_view()),
    path('experiments/', ExperimentsView.as_view()),
    path('properties/', PropertiesView.as_view()),
    path('getdicttables/', DictFieldView.as_view()),
    path('gen/', GeneratorView.as_view()),
]