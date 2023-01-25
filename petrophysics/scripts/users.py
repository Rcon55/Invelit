from django.contrib.auth.models import User

user = User.objects.create_user('tester', None, 'tester')
user.save()