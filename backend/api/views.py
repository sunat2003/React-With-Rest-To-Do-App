from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from api.models import Task
from api.serializers import TaskSerializers

#all the crud apis will be created
class TaskCRUD(ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TaskSerializers
