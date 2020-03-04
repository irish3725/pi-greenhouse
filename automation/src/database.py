
import psycopg2

def insert_stats(table, temperature, humidity, fan_power=0, entry_id='default', timestamp='localtimestamp'):

  # create connection
  connection, cursor = connect()

  sql = 'INSERT INTO ' + table + ' VALUES (' \
    + str(entry_id) + ',' \
    + str(temperature) + ',' \
    + str(humidity) + ',' \
    + str(fan_power) + ',' \
    + str(timestamp) \
    + ');'

  print('sql:', sql)

  # try insert, commit, close connection to database
  try: 
    cursor.execute(sql)
    connection.commit()
    cursor.close()
    
  except(Exception, psycopg2.DatabaseError) as error: print(error)
  finally:
    # close connection to database on every call in case server goes down
    if connection is not None:
      connection.close()



def connect():
  # connect to server
  connection = None
  cursor = None
  try:
    # connect to server
    print('Connecting to pi-greenhouse server.')
    connection = psycopg2.connect("dbname='postgres' user='writer' host='localhost' password='docker'")

    # create a cursor
    cursor = connection.cursor()

  except (Exception, psycopg2.DatabaseError) as error:
    print(error)

  return connection, cursor

if __name__ == '__main__':
  connect()

