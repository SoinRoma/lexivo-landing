from django.urls import path
from .views import ContactUsCreateAPIView

app_name = 'contact_us'

urlpatterns = [
    path('create/', ContactUsCreateAPIView.as_view(),  name='create'),

]