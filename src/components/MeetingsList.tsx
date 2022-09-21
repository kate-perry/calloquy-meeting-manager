import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography'
import '../shared/styles/styles.scss';
import { getMeetings } from '../shared/utils/api';
import { Meeting } from '../shared/utils/types';

function MeetingsList() {
    const [meetingsList, setMeetingsList] = useState([]);

    useEffect(() => {
        getMeetings().then((result) => {
            setMeetingsList(result.data)
            console.log(result.data)
        })
    }, [])

    return (
        <div className="app">
            {
                meetingsList.map((meeting: Meeting, index) => {
                    return <div>
                        <Typography key={index} variant="body1">{meeting.case.name}</Typography>
                    </div>
                })
            }
        </div>
    );
}

export default MeetingsList;
