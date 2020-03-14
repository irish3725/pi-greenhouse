import sys
import random

PIN=4

def simulate_humidity_temperature():
  # get humidity as float between 0 and 100
  humidity = round(random.uniform(0, 100), 2)
  # get temp as floatbetween 50 and 90
  temperature = round(random.uniform(50, 90), 2)

  return humidity, temperature

def get_temperature_and_humidity(simulate=False):
  
  # read sensor
  if simulate:
    humidity, temperature = simulate_humidity_temperature()
  else: 
    import Adafruit_DHT
    sensor = Adafruit_DHT.DHT11
    humidity, temperature = Adafruit_DHT.read_retry(sensor, PIN)

  # translate to ferenheit and return
  if humidity is not None and temperature is not None:
      temperature = (temperature * 9/5) + 32
      #print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
      return temperature,  humidity

  # if no reading, return nothing
  return None, None

