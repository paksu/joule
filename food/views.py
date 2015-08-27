from .models import Food
from .serializers import FoodSerializer
from rest_framework import generics


class FoodListAPIView(generics.ListCreateAPIView):
    queryset = Food.objects.filter(id__lte=10)
    serializer_class = FoodSerializer
