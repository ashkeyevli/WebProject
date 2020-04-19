from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from api.models import Menu, Dish, Order
from api.serializers import MenuSerializer, DishSerializer, OrderSerializer
from django.shortcuts import get_object_or_404
from django.shortcuts import render


@api_view(['GET', 'POST'])
def menu_view(request):
    if request.method == 'GET':
        menu_items = Menu.objects.all()
        serializer = MenuSerializer(menu_items, many=True)
        return Response(serializer.data, status=200)
    elif request.method == 'POST':
        serializer = MenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=500)


class Dishes(generics.ListCreateAPIView):
    serializer_class = DishSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering = ('price',)

    def get_queryset(self):
        return Dish.objects.filter(menu=self.kwargs['pk'])

    def perform_create(self, serializer):
        menu = get_object_or_404(Menu, id=self.kwargs['pk'])
        serializer.save(menu=menu)


class DishView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer


class Orders(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Order.objects.for_user(self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


#class OrderView(generics.RetrieveUpdateDestroyAPIView):
    #queryset = Order.objects.all()
    #serializer_class = OrderSerializer
    #permission_classes = (IsAuthenticated,)


class Clearer(APIView):
    permission_classes = (IsAuthenticated,)

    def delete(self, request):
        Order.objects.filter(user=request.user).delete()
        return Response(status=204)


def description(request):
    return render(request, 'api.html')
