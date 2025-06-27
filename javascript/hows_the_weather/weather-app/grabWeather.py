from requests import get

# returns the long and lat of the provided city
def grabCoords(city: str, key: str):
    city = city.lower()
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}"
    data = get(url).json()

    return data['coord']

def grabWeatherData(lat: int, lon: int, key: str):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}&units=imperial"
    data = get(url).json()

    return data
    