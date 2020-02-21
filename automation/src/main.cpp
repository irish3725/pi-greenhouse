#include <iostream>
#include <fstream>
#include <chrono>
#include <ctime>
#include <string>
#include "callfunc.h"

#define IOCALL "python test.py "

/*
 * Returns statistic contained in stat parameter.
 */
std::string getstat(std::string stat) {

  // define get stat command and append library to call
  std::string cmd = IOCALL;
  cmd.append(stat);

  return callcommand(cmd);

}

/*
 * Returns system time as formatted string.
 * TODO: confirm type for writing timestamp to database
*/
std::string timestamp() {
  
  auto time = std::chrono::system_clock::now();
  std::time_t formatted_time = std::chrono::system_clock::to_time_t(time);

  std::string formattedtime = std::ctime(&formatted_time);

  // remove newline
  formattedtime[formattedtime.length() - 1] = '\0';

  return formattedtime;
}

/*
 * Opens log file and appends string as a line.
 */
void appendlog(std::string logline) {
  // open log
  std::ofstream log;
  log.open("statlog.txt", std::ios_base::app); // app to append to file

  // write line to log
  log <<  logline << "\n";

  return;
}

int main() {

  // get time, temp, and humidity
  std::string time = timestamp();
  std::string temperature = getstat("temperature");
  std::string humidity = getstat("humidity");

  std::string logline = "";

  logline = time.append(" temperature: ").append(temperature).append(" humidity: ").append(humidity);

  // append time to logfile
  appendlog(logline);
  
  return 0;
}

