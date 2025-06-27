from flask import Flask,  request, render_template, jsonify, redirect, url_for
from os import environ
from json import dumps
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
    current_weather = {
        "current_temp": weather_data['main']['temp'],
        "feels_like": weather_data['main']['feels_like'],
        "max_temp": weather_data['main']['temp_max'],
        "min_temp": weather_data['main']['temp_min'],
        "weather": weather_data['weather'][0]['description']
    }
    # grab temp, temp_max, temp_min, feels_like, 

    # returns a JSON object to the requestee
    return redirect(url_for('showWeatherInfo'))
    #return jsonify({"data": weather_data, "current": current_weather}), 200

@app.route('/weather/info')
def showWeatherInfo():
    data = session
    return render_template('weather.html')

