
import time
import threading

import ui
import database
import readsensor

WRITE_INTERVAL = 40 # time interval for writing to database (10 minutes)
READ_INTERVAL = 10 # time interval for taking readings (10 minutes)
OK_TEMPERATURES = [65, 80] # range of ok temperatures
SIMULATE_READINGS = True


class automation:
  
  def __init__(self, running=True):
    self.running = True

  def run(self): 

    table = 'pi_greenhouse_statistics'
    last_write = time.time() - WRITE_INTERVAL
    
    while self.running:

      # get readings
      temperature, humidity = readsensor.get_temperature_and_humidity(SIMULATE_READINGS)
      print('temperature:', temperature, 'humidity:', humidity)

      # if time to write to database, write (get_temperature_and_humidity will return None if no readings)
      if time.time() - last_write > WRITE_INTERVAL and temperature and humidity:
        database.insert_stats(table, temperature, humidity)
        last_write = time.time()

      time.sleep(READ_INTERVAL)

    return

  """

    print('writing to database:')
    write_statistics(database, temperature, humidity)
  """


if __name__ == '__main__':

  automation_inst = automation()
  ui_inst = ui.ui(automation_inst)

  # create threads for ui and database
  threads = []

  threads.append(threading.Thread(name='automation', target=automation_inst.run))
  threads.append(threading.Thread(name='ui', target=ui_inst.run))

  for thread in threads:
    thread.start()

  for thread in threads:
    thread.join()
  

