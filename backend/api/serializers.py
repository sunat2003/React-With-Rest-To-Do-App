from rest_framework.serializers import ModelSerializer
from api.models import Task


class TaskSerializers(ModelSerializer):
    class Meta:
        model=Task 
        fields="__all__"