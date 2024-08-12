# Generated by Django 4.1.2 on 2024-05-21 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('supplier_name', models.CharField(max_length=255, verbose_name='Supplier Name')),
                ('supplier_city', models.CharField(max_length=255, verbose_name='Supplier City')),
                ('supplier_address', models.CharField(max_length=255, verbose_name='Supplier Address')),
                ('supplier_contact', models.CharField(max_length=255, verbose_name='Supplier Contact')),
                ('supplier_manager', models.CharField(max_length=255, verbose_name='Supplier Manager')),
                ('supplier_level', models.BigIntegerField(default=1, verbose_name='Supplier Level')),
                ('creater', models.CharField(max_length=255, verbose_name='Who Created')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('is_delete', models.BooleanField(default=False, verbose_name='Delete Label')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'Supplier',
                'verbose_name_plural': 'Supplier',
                'db_table': 'supplier',
                'ordering': ['supplier_name'],
            },
        ),
    ]
