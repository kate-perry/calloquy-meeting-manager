import React, { useState, useEffect, createContext } from 'react';
import CreateMeetingForm from './components/CreateMeetingForm';
import MeetingsList from './components/MeetingsList';
import { getWindowSize } from './shared/utils/functions';
import { theme } from './shared/styles/MuiThemes';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import './shared/styles/styles.scss';

export const WindowSizeContext = createContext(getWindowSize());

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Typography variant="h2">Meeting Manager</Typography>
        <CreateMeetingForm />
        <MeetingsList />
      </div>
    </ThemeProvider>
  );
}

export default App;
