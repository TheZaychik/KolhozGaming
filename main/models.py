from django.db import models


class Player(models.Model):
    playerName = models.CharField(verbose_name='Имя игрока', max_length=255, default='No name')
    playerScore = models.IntegerField(verbose_name='Очки игрока', default='0')



