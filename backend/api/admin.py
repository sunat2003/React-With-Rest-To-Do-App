from django.contrib import admin
from api.models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display=['id','task']

admin.site.register(Task,TaskAdmin)
