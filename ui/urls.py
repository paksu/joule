from django.conf.urls import *
from django.views.generic import TemplateView

urlpatterns = [
   url(r'^$', TemplateView.as_view(template_name='base.html')),
]
