import sys
import Adafruit_DHT

sensor_args = { '11': Adafruit_DHT.DHT11,
                '22': Adafruit_DHT.DHT22,
                '2302': Adafruit_DHT.AM2302 }

if len(sys.argv) == 3 and sys.argv[1] in sensor_args:
    sensor = sensor_args[sys.argv[1]]
    pin = sys.argv[2]
# default will be DHT11 and pin 4
elif len(sys.argv) == 1:
    sensor = Adafruit_DHT.DHT11
    pin = 4
else:
    print('Usage: python Adafruit_DHT.py [11|22|2302] <GPIO pin number>')
    print('Example: python Adafruit_DHT.py 11 4 - Read from an DHR11 connected to GPIO pin #4')
    sys.exit(1)

humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

if humidity is not None and temperature is not None:
    temperature = (temperature * 9/5) + 32
    #print('Temp={0:0.1f}*  Humidity={1:0.1f}%'.format(temperature, humidity))
    print(temperature,  humidity)
else:
    print('Failed to get reading. Try again!')
    sys.exit(1)
