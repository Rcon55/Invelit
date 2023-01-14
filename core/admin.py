from django.contrib import admin

from .models import Samples, Experiments, Properties, DictField

admin.site.register(Samples)
admin.site.register(Experiments)
admin.site.register(Properties)
admin.site.register(DictField)
