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
            'process_code',
            'edible_portion',
            'ingredient_class',
            'ingredient_type',
            'food_use_class',
            'food_use_type',
        )
