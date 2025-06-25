from flask import Flask,  request, render_template, jsonify
import grabWeather
app = Flask(__name__)
# enables the debug flag on 'flask run' which enables auto-reloader

# routes boi

@app.route('/')
def index():
    return render_template('index.html')

# need to see if I need to do a GET request or POST request.
# I can think of use cases for both
@app.route('/weather', methods=['POST'])
def weatherCall():
    data = request.form
    
    # returns a JSON object to the requestee
    return jsonify({"city": data.get('city-name')}), 200
    
    # going to call the weather api here
