#include <iostream>
#include <fstream>
#include <chrono>
#include <ctime>
#include <string>

int readTempHumid() {

}

int main() {
  
  auto time = std::chrono::system_clock::now();
  std::time_t formatted_time = std::chrono::system_clock::to_time_t(time);

  std::ofstream statlog;
  statlog.open("statlog.txt", std::ios_base::app); // app to append to file
  statlog << std::ctime(&formatted_time) << ;
  return 0;
}

