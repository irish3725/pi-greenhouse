import sys

# list of valid commands
commands = ["temperature", "humidity"]
# temperature and humidity hardcoded to dictionary
values = {"temperature": 82.1, "humidity": 77}

if __name__ == "__main__":

  # if arguements given
  if len(sys.argv) == 2:
    # check for valid arguements and then print
    if sys.argv[1] in commands:
      print(values[sys.argv[1]], end="")
    else:
      print("invalid arguements", end="")
  # no arguements returns both
  else:
    print("82.1 77", end="")


