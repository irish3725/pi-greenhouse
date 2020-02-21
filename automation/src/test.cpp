
#include <string>
#include <iostream>
#include "callfunc.h"

int main() {

  std::string command;
  std::string temperature;
  std::string humidity;

  command = "python test.py temperature";
  temperature = callcommand(command);

  command = "python test.py humidity";
  humidity = callcommand(command);
  
  std::cout << "temperature: " << temperature << " humidity: " << humidity << "\n";

  return 0;
}


