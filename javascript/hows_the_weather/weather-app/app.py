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
    if request.is_json:
        print("received json")
        data = request.get_json()
        return jsonify({"message": "test", "received_data": data}), 200
    else: 
        print("error")
        data = request.form.to_dict()
        return jsonify({"message": "Data received successfully!", "received_data": data}), 200
    
    # going to call the weather api here
