from django.db import models
from base.models import Base

class ContactInformation(Base):

    phone_number = models.CharField(max_length=50, null=True, blank=True)
    facebook_url = models.URLField(max_length=255, null=True, blank=True)
    linkedin_url = models.URLField(max_length=255, null=True, blank=True)
    instagram_url = models.URLField(max_length=255, null=True, blank=True)
    ios_url = models.URLField(max_length=255, null=True, blank=True)
    android_url = models.URLField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.phone_number}"


class ContactUs(Base):

    company_name = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    agreement = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.company_name}"


class CompanyHR(Base):

    logo = models.FileField(upload_to="logo")
    title = models.TextField(null=True, blank=True)
    description = models.CharField(max_length=500, null=True, blank=True)

    def __str__(self):
        return f"{self.description}"