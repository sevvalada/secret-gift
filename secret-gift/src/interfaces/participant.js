export const createParticipant = (name) => {
    return {
        id: Date.now(),
        name: name.trim(),
    }
}