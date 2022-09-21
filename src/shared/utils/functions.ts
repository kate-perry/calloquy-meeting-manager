import { breakpoint, WindowSize } from "./constants";

export function getWindowSize() {
    const { innerWidth } = window;
    if (innerWidth < breakpoint.small) {
        return WindowSize.SMALL
    } else if (innerWidth < breakpoint.medium) {
        return WindowSize.MEDIUM
    } else if (innerWidth < breakpoint.large) {
        return WindowSize.LARGE
    } else {
        return WindowSize.XLARGE
    };
}

// Ran out of time, so here's the submit plan!

export function validateFields() {
    // Check that Case, Meeting Type, and Participants have values
}

export function buildParticipants() {
    // The multi-select field I'm using uses "value" as the display name,
    //      so my field has really built a list of strings in the format
    //      "LastName, FirstName". It would be better in the long run to
    //      change handlers so it can manage a Value and Display Name
    //      separately, but here I would go through All Participants and
    //      pull the IDs of the Selected Participants in this function
}

export function buildRequest() {
    // Bundle separate fields into one object so it's ready to post
}