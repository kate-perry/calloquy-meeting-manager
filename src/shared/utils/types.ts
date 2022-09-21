export type MeetingType = {
    id: number,
    name: string,
}

export type Case = {
    id: number,
    name: string,
    description: string,
}

export type Participant = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
}

export type Meeting = {
    id: number,
    case_id: number,
    case: Case,
    type_id: number,
    type: MeetingType,
    participants: string[],
    scheduled: Date,
}