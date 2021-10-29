from django.http.request import HttpRequest
from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request) :
    return render(request, 'index.html')
def portfoliodetails(request) :
    return render(request, 'portfolio-details.html')
