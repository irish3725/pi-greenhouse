
# pi-greenhouse

pi-greenhouse is raspberry pi controlled greenhouse with a webpage front end to display the current conditions as well as a history of the conditions in the greenhouse. 

The frontend is built with React. The history is stored on a containerized PostegreSQL database which is connect to the front end through a Node.js api. The API between the database and the frontend is written with Node.js. The greenhouse automation and statistics collection is written in c++.

The intention of this project is to combine my passion for house plants and my passion for software development. I get to gain experience with automation, web development, database management, and plant propogation at the same time.

## Current Progress

### Frontend
- [ ] Create main page.
  - [ ] Temperature.
    - [x] componenet
    - [x] reads from database
    - [ ] click to display history graph
  - [ ] Humidity.
    - [x] componenet
    - [x] reads from database
    - [ ] click to display history graph
  - [ ] Fan.
    - [x] componenet
    - [x] reads from database
    - [ ] click to display history graph
  - [ ] Most recent image.
    - [ ] componenet
    - [ ] reads from database
    - [ ] display image from date
  - [ ] Graph displaying history
    - [ ] create graph
    - [ ] graph slides out on click
    - [ ] add/remove lines on graph on click
    - [ ] graph slides back to show older data
- [ ] Display README on about page.

### Database Backend
- [x] Create containerized database.
- [x] Design table(s).
- [ ] Persistece.
- [ ] Automate backups.

### Database API
- [x] Frontend.
  - [x] build API
  - [x] attach to front-end
- [ ] Backend.
  - [ ] build API
  - [ ] attach to automation back-end

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

