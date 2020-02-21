
#include <string>
#include "callfunc.h"

std::string callcommand(std::string cmd) {

  // append to command?
  cmd.append(" 2>&1");
  
  // create string to hold output
  std::string output;

  // create pointer to command stream
  FILE * stream;

  // create buffer
  const int max_buffer = 256;
  char buffer[max_buffer];

  // open stream for reading output
  stream = popen(cmd.c_str(), "r");
  if (stream) {
    // append to output till end of file
    while (!feof(stream))
      if(fgets(buffer, max_buffer, stream) != NULL) output.append(buffer);
    pclose(stream);
  }

  return output;

}

