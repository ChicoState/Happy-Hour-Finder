# Generated by Django 3.2.5 on 2021-08-03 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homes', '0002_propertyimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='slug',
            field=models.SlugField(blank=True, max_length=1000, null=True),
        ),
    ]