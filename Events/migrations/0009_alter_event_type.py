# Generated by Django 4.0.3 on 2022-05-12 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Events', '0008_merge_0007_alter_event_type_0007_fav'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='type',
            field=models.CharField(choices=[('HH', 'Happy Hour'), ('SP', 'Student Special'), ('OT', 'Other')], default='HH', max_length=100, null=True, verbose_name='Event Type'),
        ),
    ]
