from django.urls import path
from main import views
from django.conf.urls import url

app_name = 'main'
urlpatterns = [
    path('', views.index, name='index')
]
