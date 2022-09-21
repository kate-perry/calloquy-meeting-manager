export async function getMeetings() {
    try {
        const response = await fetch("http://localhost:8000/api/meetings");
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getParticipants() {
    try {
        const response = await fetch("http://localhost:8000/api/participants");
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getTypes() {
    try {
        const response = await fetch("http://localhost:8000/api/types");
        return await response.json();
    } catch (error) {
        return [];
    }
}

export async function getCases() {
    try {
        const response = await fetch("http://localhost:8000/api/cases");
        return await response.json();
    } catch (error) {
        return [];
    }
}