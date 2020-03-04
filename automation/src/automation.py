
import time
import threading

import ui
import database

WRITE_INTERVAL=40 # time interval for writing to database (10 minutes)
READ_INTERVAL=10 # time interval for taking readings (10 minutes)
TEMPTHRES=[65, 80] # range of ok temperatures

class automation:
  
  def __init__(self, running=True):
    self.running = True

  def run(self): 

    table = 'pi_greenhouse_statistics'
    last_write = time.time() - WRITE_INTERVAL
    
    #temperature, humidity = read_sensors()
    temperature, humidity = 10, 20

    while self.running:
      # get reading
      print('temperature:', temperature, 'humidity:', humidity)

      if time.time() - last_write > WRITE_INTERVAL:
        print('Writing to database temperature:', temperature, 'humidity:', humidity)
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
  

