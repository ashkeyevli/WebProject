from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views import menu_view, OrderView, MenuDishesAPIView, DishDetailAPIView, orders_list, DishDetailAPIView2

urlpatterns = [
    path('menu/', menu_view),
    path('menu/<int:id>/dishes/', MenuDishesAPIView.as_view()),
    path('dishes/<int:pk>/', DishDetailAPIView.as_view()),
    path('orders/', orders_list),
    path('login/', obtain_jwt_token)
]
