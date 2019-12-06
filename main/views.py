from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from main import forms

def home(request):
    pass

def auth(request):
    if request.method == 'POST':
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            return render(request, 'auth.html', context={'err': 'Ошибка входа'})
    return render(request, 'auth.html')


def log_out(request):
    logout(request)
    return redirect('/')


def register(request):
    if request.method == 'POST':
        formUser = forms.FormReg(request.POST)
        if formUser.is_valid():
            formUser.save()
        else:
            return render(request, 'reg.html', context={'err': formUser.errors})
        playerScore = forms.PlayerScore(user=formUser.instance, UserScore=0)
        playerScore.save()
        user = authenticate(username=request.POST['username'], password=request.POST['password1'])
        login(request, user)
        return redirect('/')
    else:
        return render(request, 'reg.html')


def index(request):
    return render(request, 'index.html')
