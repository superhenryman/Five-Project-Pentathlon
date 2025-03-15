from django.db import models

class Post(models.Model):
    confession = models.TextField()
    def __str__(self):
        return self.confession