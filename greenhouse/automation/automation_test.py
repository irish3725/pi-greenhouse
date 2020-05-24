
import src.readsensor as readsensor

class AutomationSuite():
  def __init__():
    pass

class Readsensor_Suite():
  def __init__(self):
    pass

  def run_tests(self):
    self.test_simulate_humidity_temperature()

  def test_simulate_humidity_temperature(self):
    temperature, humidity = readsensor.simulate_humidity_temperature()
    assert temperature >= 50 and temperature <= 90, "Temperature should be between 50 and 90."
    assert humidity >= 0 and humidity <= 100, "Humidity should be between 0 and 100"

  def test_get_temperature_and_humidity_simulated():
    temperature, humidity = get_temperature_and_humidity()
    assert temperature >= 50 and temperature <= 90, "Temperature should be between 50 and 90."
    assert humidity >= 0 and humidity <= 100, "Humidity should be between 0 and 100"

def test_readsensor():
  readsensor_suit = Readsensor_Suite()
  readsensor_suit.run_tests()


