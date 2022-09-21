import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import moment, { Moment } from 'moment';
import '../shared/styles/styles.scss';
import { getTypes, getCases, getParticipants } from '../shared/utils/api';
import { Case, MeetingType, Participant } from '../shared/utils/types';
// import { validateFields, buildParticipants, buildRequest } from '../shared/utils/functions';

function MeetingsList() {
    const [meetingTypeList, setMeetingTypeList] = useState([]);
    const [caseList, setCaseList] = useState([]);
    const [participantsList, setParticipantsList] = useState([]);

    const [selMeetingType, setSelMeetingType] = useState(-1);
    const [selCase, setSelCase] = useState(-1);
    const [selParticipants, setSelParticipants] = useState<string[]>([]);
    const [selMeetingTime, setSelMeetingTime] = useState(moment());

    useEffect(() => {
        getTypes().then((result) => {
            setMeetingTypeList(result.data)
        })

        getCases().then((result) => {
            setCaseList(result.data)
        })

        getParticipants().then((result) => {
            setParticipantsList(result.data)
        })
    }, [])

    const handleMultiSelectChange = (e: SelectChangeEvent<typeof selParticipants>) => {
        setSelParticipants(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)
    }

    // more information on the plan for these submit fields in shared/utils/functions!
    const submitForm = () => {
        // const validated = validateFields(selMeetingType, selCase, selParticipants);
        // if (validated) {
        //     const reqParticipants = buildParticipants(selParticipants);
        //     const request = buildRequest(selMeetingType, selCase, reqParticipants);
        //     submitForm(request).then((result) => {
        //         // show success/error to user
        //         // if success, clear out fields so user can submit another, add new meeting to meetings list
        //     })
        // }
    }

    return (
        <div className="form">
            <TextField
                select
                fullWidth
                required
                id="caseField"
                label="Case"
                value={selCase}
                onChange={(e) => {
                    setSelCase(Number(e.target.value))
                }}
            >
                <MenuItem key={-1} value={-1}></MenuItem>
                {caseList.map((caseOption: Case, index) => {
                    return <MenuItem key={index} value={caseOption.id}>{caseOption.name}</MenuItem>
                })}
            </TextField>
            <TextField
                select
                fullWidth
                required
                id="meetingTypeField"
                label="Meeting Type"
                value={selMeetingType}
                onChange={(e) => {
                    setSelMeetingType(Number(e.target.value))
                }}
            >
                <MenuItem key={-1} value={-1}></MenuItem>
                {meetingTypeList.map((meetingType: MeetingType, index) => {
                    return <MenuItem key={index} value={meetingType.id}>{meetingType.name}</MenuItem>
                })}
            </TextField>
            <FormControl sx={{ width: '100%' }}>
                <InputLabel id="participantsFieldLabel">Participants</InputLabel>
                <Select
                    multiple
                    fullWidth
                    required
                    id="participantsField"
                    value={selParticipants}
                    onChange={handleMultiSelectChange}
                    input={<OutlinedInput label="Participants" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    {participantsList.map((participant: Participant, index) => {
                        return <MenuItem key={participant.id} value={participant.last_name + ", " + participant.first_name}>
                            {participant.last_name + ", " + participant.first_name}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                    renderInput={(props: any) => <TextField fullWidth {...props} />}
                    label="Meeting Time"
                    value={selMeetingTime}
                    onChange={(newValue: Moment | null) => {
                        if (newValue)
                            setSelMeetingTime(newValue);
                    }}
                />
            </LocalizationProvider>
            <div>
                <Button
                    variant="contained"
                    onClick={submitForm}>
                        Create Meeting
                </Button>
            </div>
        </div>
    );
}

export default MeetingsList;
