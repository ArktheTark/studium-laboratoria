from flask import Flask, request, render_template
import grabWeather
app = Flask(__name__)
# enables the debug flag on 'flask run' which enables auto-reloader

# routes boi

@app.route('/')
def index():
    return render_template('index.html')

# need to see if I need to do a GET request or POST request.
# I can think of use cases for both
@app.route('/weather')
def weatherCall():
    ...
    # going to call the weather api here
