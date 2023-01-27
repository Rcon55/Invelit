from django.db import models
from datetime import datetime, timedelta
from django.utils import timezone


class DictField(models.Model):
	table_name = models.CharField(max_length=50)
	table_desc = models.CharField(max_length=50)
	column_name = models.CharField(max_length=50)
	column_desc = models.CharField(max_length=50)
	editable = models.BooleanField()
	comment = models.CharField(max_length=200, null=True)

class Groups(models.Model):
	group_id = models.BigAutoField(primary_key=True, editable=False)
	name = models.CharField(max_length=50)
	autor = models.CharField(max_length=50)
	description = models.CharField(max_length=200, blank=True)
	origin = models.IntegerField(null=True)


class Samples(models.Model):
	sample_id = models.BigAutoField(primary_key=True, editable=False)
	# group = models.ForeignKey("Groups", on_delete=models.CASCADE)
	group = models.BigIntegerField()
	name = models.CharField(max_length=20)
	area = models.CharField(max_length=50, null=True)
	field = models.CharField(max_length=50, null=True)
	uwi = models.CharField(max_length=50, null=True)
	well = models.CharField(max_length=50, null=True)
	autor = models.CharField(max_length=50)
	create_date = models.DateTimeField(editable=False)
	update_date = models.DateTimeField()

	def save(self, *args, **kwargs):
		if not self.sample_id:
			self.create_date = timezone.now()
		self.update_date = timezone.now()
		return(super(Samples, self).save(*args, **kwargs))

class Experiments(models.Model):
	experiment_id = models.BigAutoField(primary_key=True)
	name = models.CharField(max_length=20)
	experiment_type = models.CharField(max_length=20, null=True)
	description = models.CharField(max_length=200, blank=True)
	sample = models.ForeignKey("Samples", on_delete=models.CASCADE)
	date = models.DateTimeField(null=True)
	
class Properties(models.Model):
	experiment = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	porosity = models.FloatField(null=True)
	permeability = models.FloatField(null=True)
	density = models.FloatField(null=True)

class Saturation(models.Model):
	experiment = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	water_saturation = models.FloatField()
	resistivity = models.FloatField()
	water_resistivity = models.FloatField(null=True)

class CapillaryCurve(models.Model):
	experiment = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	pressure = models.FloatField()
	water_saturation = models.FloatField()
