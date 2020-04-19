from rest_framework import serializers
from api.models import Menu, Dish, Order
from django.contrib.auth.models import User
from django.contrib.auth.hashers import BCryptSHA256PasswordHasher


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'email', 'is_staff')


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    encoder = BCryptSHA256PasswordHasher()

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name')

    def create(self, validated_data):
        password = validated_data.pop('password')
        hashed_password = self.encoder.encode(password, salt=self.encoder.salt())
        user = User.objects.create(password=hashed_password, **validated_data)
        user.save()
        return user


class MenuSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    image_url_menu = serializers.CharField(max_length=255)

    class Meta:
        model = Menu
        fields = '__all__'


class DishSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    image_url = serializers.CharField(style={'base_template': 'textarea.html'})
    count = serializers.IntegerField(default=1)
    menu = MenuSerializer(read_only=True)

    class Meta:
        model = Dish
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    count = serializers.IntegerField(required=True)
    image_url = serializers.CharField()
    price = serializers.FloatField()
    user = UserSerializer(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
