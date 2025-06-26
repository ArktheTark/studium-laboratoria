from flask import Flask,  request, render_template, jsonify
from os import environ
from dotenv import load_dotenv
import grabWeather
app = Flask(__name__)
# adds variables from .env file
load_dotenv()
# loads the weather_key from the .env file
key = environ['weather_key']

# routes boi
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather', methods=['POST'])
def weatherCall():
    data = request.form
    city = data.get('city-name')
    # grabbing coords for provided city
    coord_data = grabWeather.grabCoords(city, key)
    # using coords from above method, grab weather data for city
    weather_data = grabWeather.grabWeatherData(coord_data['lat'], coord_data['lon'], key)

    # returns a JSON object to the requestee
    return jsonify({"data": weather_data}), 200

