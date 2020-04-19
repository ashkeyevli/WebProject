from django.urls import path
from api.views import menu_view, description, OrderView, Orders, DishView, Dishes

urlpatterns = [
    path('menu/', menu_view),
    path('menu/<int:pk>/dishes/', Dishes.as_view()),
    path('dishes/<int:pk>/', DishView.as_view()),
    path('orders/', Orders.as_view()),
    path('orders/<int:pk>/', OrderView.as_view()),
    path('', description),
]
