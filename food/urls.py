from django.conf.urls import *
from . import views

urlpatterns = [
    url(r'^foods/?$', views.FoodListAPIView.as_view()),
]
