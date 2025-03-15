from django.shortcuts import render
from .forms import PostForm


def confess(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            print(form)
            form.save()  # Save the form to the database
            # You can redirect or return a success page
    else:
        form = PostForm()  # Initialize the form for GET request

    # Ensure that form is passed to the template in both GET and POST cases
    return render(request, "index.html", {'form': form})