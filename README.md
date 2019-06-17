# Project Alarmostat frontend
This is the frontend for my Alarmostat project. It's a site that connects to a Flask backend via socketio and standard routes.
link to the backend: https://github.com/thomasdebiehw/project-backend

Install the Apache webserver on your Pi:
```
$: sudo apt-get update
$: sudo apt-get install apache2 -y
```
And place the files in /var/www/html

To get the ip-address of your Pi run 

hostname -I

Browse to the IP in a webbrowser and you should be greeted with the frontend
