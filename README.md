
# pi-greenhouse

pi-greenhouse is raspberry pi controlled greenhouse with a webpage front end to display the current conditions as well as a history of the conditions in the greenhouse. 

The intention of this project is to combine my passion for house plants and my passion for software development. I get to gain experience with automation, web development, database management, and plant propogation at the same time.

## Current Progress

### Web Interface
- [ ] Create main page with:
  - [ ] Temperature
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Humidity
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Fan
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Most recent image.
    - [ ] reads from database
    - [ ] display image from date
- [ ] Display README on about page.
- [ ] Get data from database for statistics history.

### Greenhouse Automation
- [ ] Temperature.
  - [ ] install sensor
  - [ ] write temp to database
- [ ] Humidity.
  - [ ] install sensor
  - [ ] write temp to database
- [ ] Toggle fans.
  - [ ] install fans
  - [ ] toggle fan power based on temp
  - [ ] write changes to database
- [ ] Toggle light.
  - [ ] install light
  - [ ] light controlled by pi?
- [ ] Get regular (daily?) image.
  - [ ] install camera
  - [ ] write images to database

### Database Backend
- [ ] Determine length of time between readings.
- [ ] Create table(s).
- [ ] Determine lifespan of data and automatically remove old data.

### Build
- [ ] write makefile



