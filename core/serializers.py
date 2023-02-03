from rest_framework import serializers
from .models import Samples, DictField, Properties, Experiments, Groups, Storage

class SamplesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Samples
		fields = ['sample_id', 'group', 'name', 'area', 'field', 'uwi', 'well', 
			'autor', 'create_date', 'update_date']
		read_only_fields = ['create_date', 'update_date']

class StorageSerializer(serializers.ModelSerializer):
	class Meta:
		model = Storage
		fields = ['group', 'name', 'autor', 'description', 'public', 'secret_key']
		read_only_fields = ['autor']

class GroupsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Groups
		fields = ['group_id', 'name', 'autor', 'description', 'origin']

class ExperimentsSerializer(serializers.ModelSerializer):
	class Meta:
		model = Experiments
		fields = ['experiment_id', 'name', 'experiment_type', 'description', 'sample', 'date']

class PropertiesSerializer(serializers.ModelSerializer):
	class Meta:
		model = Properties
		fields = ['id', 'experiment', 'porosity', 'permeability', 'density']

class DictFieldSerializer(serializers.ModelSerializer):
	class Meta:
		model = DictField
		fields = ['table_name', 'table_desc', 'column_name', 'column_desc', 'editable']