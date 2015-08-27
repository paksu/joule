from rest_framework import serializers
from .models import Food, Component


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = (
            "code",
            "value",
        )


class FoodSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True, read_only=True)

    class Meta:
        model = Food
        fields = (
            'id',
            'created_at',
            'modified_at',
            'name',
            'food_type',
            'components',
        )
