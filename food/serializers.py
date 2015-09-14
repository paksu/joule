from rest_framework import serializers
from .models import Food, FoodUnit, Component


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = (
            "code",
            "value",
        )


class FoodUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodUnit
        fields = (
            "unit_code",
            "mass",
        )


class FoodSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True, read_only=True)
    units = FoodUnitSerializer(many=True, read_only=True)

    class Meta:
        model = Food
        fields = (
            'id',
            'created_at',
            'modified_at',
            'name',
            'food_type',
            'process_code',
            'edible_portion',
            'ingredient_class',
            'ingredient_type',
            'food_use_class',
            'food_use_type',
            'units',
            'components',
        )
