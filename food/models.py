from django.db import models


class Component(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)
    code = models.CharField(max_length=200)
    value = models.DecimalField(max_digits=10, decimal_places=2)


class FoodUnit(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)
    unit_code = models.CharField(max_length=50)
    mass = models.DecimalField(max_digits=10, decimal_places=2)


class Food(models.Model):
    FOOD = 'food'
    DISH = 'dish'
    FOOD_TYPE_CHOICES = (
        (FOOD, 'Food'),
        (DISH, 'Dish'),
    )
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)
    name = models.CharField(max_length=200)
    food_type = models.CharField(max_length=4, choices=FOOD_TYPE_CHOICES, default=FOOD)
    process_code = models.CharField(blank=True, max_length=10)
    edible_portion = models.DecimalField(default=100.0, max_digits=5, decimal_places=2)
    ingredient_class = models.CharField(blank=True, max_length=20)
    ingredient_type = models.CharField(blank=True, max_length=20)
    food_use_class = models.CharField(blank=True, max_length=20)
    food_use_type = models.CharField(blank=True, max_length=20)
    components = models.ManyToManyField(Component)
    units = models.ManyToManyField(FoodUnit)
