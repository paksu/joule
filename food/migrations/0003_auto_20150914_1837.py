# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0002_auto_20150914_1816'),
    ]

    operations = [
        migrations.CreateModel(
            name='FoodUnit',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(null=True)),
                ('unit_code', models.CharField(max_length=50)),
                ('mass', models.DecimalField(max_digits=10, decimal_places=2)),
            ],
        ),
        migrations.AddField(
            model_name='food',
            name='units',
            field=models.ManyToManyField(to='food.FoodUnit'),
        ),
    ]
