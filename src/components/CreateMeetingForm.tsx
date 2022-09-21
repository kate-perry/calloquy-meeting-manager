import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import '../shared/styles/styles.scss';
import { getTypes, getCases, getParticipants } from '../shared/utils/api';
import { Case, MeetingType, Participant } from '../shared/utils/types';

function MeetingsList() {
    const [meetingTypeList, setMeetingTypeList] = useState([]);
    const [caseList, setCaseList] = useState([]);
    const [participantsList, setParticipantsList] = useState([]);

    const [selMeetingType, setSelMeetingType] = useState(-1);
    const [selCase, setSelCase] = useState(-1);
    const [selParticipants, setSelParticipants] = useState<string[]>([]);

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
                >
                    {participantsList.map((participant: Participant, index) => {
                        return <MenuItem key={participant.id} value={participant.last_name + ", " + participant.first_name}>
                            {participant.last_name + ", " + participant.first_name}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default MeetingsList;
