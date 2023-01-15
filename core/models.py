from django.db import models
from django.utils import timezone


class DictField(models.Model):
	TABLE_NAME = models.CharField(max_length=50)
	TABLE_DESC = models.CharField(max_length=50)
	COLUMN_NAME = models.CharField(max_length=50)
	COLUMN_DESC = models.CharField(max_length=50)
	EDITABLE = models.BooleanField()
	COMMENT = models.CharField(max_length=200, null=True)

class Users(models.Model):
	USER_ID = models.AutoField(primary_key=True)
	FIRST_NAME = models.CharField(max_length=50)
	LAST_NAME = models.CharField(max_length=50)
	EMAIL = models.EmailField(max_length=254)

class Samples(models.Model):
	SAMPLE_ID = models.BigAutoField(primary_key=True, editable=False)
	NAME = models.CharField(max_length=20)
	AREA = models.CharField(max_length=50, null=True)
	FIELD = models.CharField(max_length=50, null=True)
	UWI = models.CharField(max_length=50, null=True)
	WELL = models.CharField(max_length=50, null=True)
	AUTOR = models.CharField(max_length=50)
	CREATE_DATE = models.DateTimeField(editable=False)
	UPDATE_DATE = models.DateTimeField()

	def save(self, *args, **kwargs):
		if not self.SAMPLE_ID:
			self.CREATE_DATE = timezone.now()
		self.UPDATE_DATE = timezone.now()
		return(super(Samples, self).save(*args, **kwargs))

class Experiments(models.Model):
	EXPERIMENT_ID = models.BigAutoField(primary_key=True)
	NAME = models.CharField(max_length=20)
	TYPE = models.CharField(max_length=20, null=True)
	DESCRIPTION = models.CharField(max_length=200, null=True)
	SAMPLE = models.ForeignKey("Samples", on_delete=models.CASCADE)
	DATE = models.DateTimeField(null=True)
	
class Properties(models.Model):
	EXPERIMENT = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	POROSITY = models.FloatField(null=True)
	PERMEABILITY = models.FloatField(null=True)
	DENSITY = models.FloatField(null=True)

class Saturation(models.Model):
	EXPERIMENT = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	WATER_SATURATION = models.FloatField()
	RESISTIVITY = models.FloatField()
	WATER_RESISTIVITY = models.FloatField(null=True)

class CapillaryCurve(models.Model):
	EXPERIMENT = models.ForeignKey("Experiments", on_delete=models.CASCADE)
	PRESSURE = models.FloatField()
	WATER_SATURATION = models.FloatField()
