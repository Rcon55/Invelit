from rest_framework import serializers
from .models import Samples, DictField, Properties, Experiments

class SamplesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Samples
		fields = ['SAMPLE_ID', 'NAME', 'AREA', 'FIELD', 'UWI', 'WELL', 
			'AUTOR', 'CREATE_DATE', 'UPDATE_DATE']
		read_only_fields = ['SAMPLE_ID', 'CREATE_DATE', 'UPDATE_DATE']

class ExperimentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Experiments
		fields = ['EXPERIMENT_ID', 'NAME', 'TYPE', 'DESCRIPTION', 'SAMPLE', 'DATE']
		read_only_fields = ['EXPERIMENT_ID']

class PropertiesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Properties
		fields = ['EXPERIMENT', 'POROSITY', 'PERMEABILITY', 'DENSITY']

class DictFieldSerializer(serializers.ModelSerializer):
	class Meta:
		model = DictField
		fields = ['TABLE_NAME', 'TABLE_DESC', 'COLUMN_NAME', 'COLUMN_DESC', 'EDITABLE']