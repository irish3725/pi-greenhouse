
# python libraries
import time
import threading

# pi-greenhouse libraries
import ui
import database
import readsensor

# automation constants
WRITE_INTERVAL = 600 # time interval for writing to database (10 minutes)
READ_INTERVAL = 600 # time interval for taking readings (10 minutes)
OK_TEMPERATURES = [70, 87] # range of ok temperatures
SIMULATE_READINGS = False

# database constants (to be replaced by config file)
DB_NAME = 'greenhouse_statistics'
USER = 'writer'
HOST = 'localhost'
PASSWORD = 'docker'
TABLE = 'pi_greenhouse_statistics'

class automation:
  
  def __init__(self, running=True):
    self.running = True

  # read database config file to prevent hardcoding database info
  def get_database_info(self):
    pass

  def run(self): 
    last_write = time.time() - WRITE_INTERVAL
    
    # loop while still running
    while self.running:
      # get readings
      temperature, humidity = readsensor.get_temperature_and_humidity(SIMULATE_READINGS)
      print('temperature:', temperature, 'humidity:', humidity)

      # if time to write to database, write (get_temperature_and_humidity will return None if no readings)
      if time.time() - last_write > WRITE_INTERVAL and temperature and humidity:
        # if database write fails, exit
        if not database.insert_stats(DB_NAME, USER, HOST, PASSWORD, TABLE, temperature, humidity):
          self.running = False
          return
          
        # update time of last attempted write
        last_write = time.time()

      # sleep for amount of time to wait between reads
      time.sleep(READ_INTERVAL)

    return

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
  

