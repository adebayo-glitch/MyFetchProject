export function getNextId() {
    let nextId = 1;
    nextId = nextId % 100 + 1; 
    return nextId
}