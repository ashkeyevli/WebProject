from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from api.views import menu_view, OrderAPIView, MenuDishesAPIView, DishDetailAPIView, DishDetailAPIView2, orders_list

urlpatterns = [
    path('menu/', menu_view),
    path('menu/<int:id>/dishes/', MenuDishesAPIView.as_view()),
    path('dishes/<int:pk>/', DishDetailAPIView.as_view()),
    path('orders/', orders_list),
    path('orders/<int:pk>', OrderAPIView.as_view()),
    path('login/', obtain_jwt_token)
]
