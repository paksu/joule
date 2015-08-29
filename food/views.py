from .models import Food
from .serializers import FoodSerializer
from rest_framework import generics
from rest_framework import filters


class FoodListAPIView(generics.ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('$name',)
