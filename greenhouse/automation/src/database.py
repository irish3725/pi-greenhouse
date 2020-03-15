
import psycopg2

## call this function to connect to database at host and insert temp, humidity, and fanpower
def insert_stats(db_name, user, host, password, table, temperature, humidity, fan_power=0, entry_id='default', timestamp='localtimestamp'):

  #print('db_name:', db_name, '\nuser:', user, '\nhost:', host, '\npassword:', password, '\ntable:', table, '\ntemperature:', temperature, '\nhumidity:', humidity, '\nfan_power:', fan_power, '\nentry_id:', entry_id, '\ntimestamp:', timestamp)

  # create connection
  connection, cursor = connect(db_name, user, host, password)

  sql = 'INSERT INTO ' + table + ' VALUES (' \
    + str(entry_id) + ',' \
    + str(temperature) + ',' \
    + str(humidity) + ',' \
    + str(fan_power) + ',' \
    + str(timestamp) \
    + ');'

  print('sql:', sql)

  write = False

  # try insert, commit, close connection to database
  try: 
    cursor.execute(sql)
    connection.commit()
    cursor.close()
    write = True
  except(Exception, psycopg2.DatabaseError) as error: print(error)
  finally:
    # close connection to database on every call in case server goes down
    if connection is not None:
      connection.close()

  return write

def connect(db_name, user, host, password):
  # connect to server
  connection = None
  cursor = None
  try:
    # connect to server
    print('Connecting to database:', db_name + '.')
    connection_string = "dbname='" + db_name + "' user='" + user + "' host='" + host + "' password='" + password + "'"
    connection = psycopg2.connect(connection_string)

    # create a cursor
    cursor = connection.cursor()

  except (Exception, psycopg2.DatabaseError) as error:
    print(error)

  return connection, cursor

if __name__ == '__main__':
  connect()

