# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='edible_portion',
            field=models.DecimalField(default=100.0, max_digits=5, decimal_places=2),
        ),
        migrations.AddField(
            model_name='food',
            name='food_use_class',
            field=models.CharField(max_length=20, blank=True),
        ),
        migrations.AddField(
            model_name='food',
            name='food_use_type',
            field=models.CharField(max_length=20, blank=True),
        ),
        migrations.AddField(
            model_name='food',
            name='ingredient_class',
            field=models.CharField(max_length=20, blank=True),
        ),
        migrations.AddField(
            model_name='food',
            name='ingredient_type',
            field=models.CharField(max_length=20, blank=True),
        ),
        migrations.AddField(
            model_name='food',
            name='process_code',
            field=models.CharField(max_length=10, blank=True),
        ),
    ]
