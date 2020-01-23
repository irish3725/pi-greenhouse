
# pi-greenhouse

pi-greenhouse is raspberry pi controlled greenhouse with a webpage front end to display the current conditions as well as a history of the conditions in the greenhouse. 

The history is stored on a containerized PostegreSQL database which is connect to the front end through a Node.js api.

The intention of this project is to combine my passion for house plants and my passion for software development. I get to gain experience with automation, web development, database management, and plant propogation at the same time.

## Current Progress

### Web Interface
- [ ] Create main page.
  - [ ] Temperature.
    - [x] componenet
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Humidity.
    - [x] componenet
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Fan.
    - [x] componenet
    - [ ] reads from database
    - [ ] click to display history graph
  - [ ] Most recent image.
    - [ ] componenet
    - [ ] reads from database
    - [ ] display image from date
- [ ] Display README on about page.

### Database Backend
- [x] Create containerized database.
- [x] Create table(s).
- [ ] Determine length of time between readings.
- [ ] Determine lifespan of data and automatically remove old data.
- [ ] Write backup script.

### Database API
- [x] Temperature.
- [x] Humidity.
- [x] Fan.
- [ ] Attach to front-end.

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

### Build
- [x] Write database initialize script.
- [ ] Write makefile.

