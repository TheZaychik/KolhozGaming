from django.urls import path
from main import views
from django.conf.urls import url

app_name = 'main'
urlpatterns = [
    path('', views.index, name='index'),
    path('reg/', views.register, name='register'),
    path('auth/', views.auth, name='auth'),
    path('logout/', views.log_out, name='log_out'),
    path('home/', views.home, name='home'),
    path('end/', views.end, name='end'),
]