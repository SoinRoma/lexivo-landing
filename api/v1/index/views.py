from .serializers import ContactUsSerializer
from rest_framework.generics import CreateAPIView

class ContactUsCreateAPIView(CreateAPIView):
    serializer_class = ContactUsSerializer