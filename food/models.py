from django.db import models


class Component(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True)
    code = models.CharField(max_length=200)
    value = models.DecimalField(max_digits=10, decimal_places=2)


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
    components = models.ManyToManyField(Component)
