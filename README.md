# Meetings Manager

A single-page webapp to manage meetings and participants for cases. This front-end was built on top of a template I made from create-react-app (see repo [here](https://github.com/kate-perry/cra-template)).

## How To Run

To connect to the API, follow the instructions in [this repo](https://github.com/calloquy-dusty-fowler/code_assessment).

To start the client, open a terminal in this directory and run `npm install` then `npm start`. Navigate to `localhost:3000` to interact.

## Features

### Add A Meeting

- [X] Select Case (getCases)
- [X] Select Meeting Type (getTypes)
- [ ] Select (multiple) Participants (getParticipants, display as "LastName, FirstName")
- [ ] Select a time
- [ ] Save Meeting (postMeeting)
- [ ] Validation

### View Meetings

- [x] View all meetings (list view)
- [ ] Sort meetings by time
- [ ] Filter meetings by participant

## Future

- [ ] Sign in to view specific calendar
- [ ] View conflicts when booking, suggested times
- [ ] Meeting durations
