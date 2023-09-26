// Ideally sorted by "result"

export function getRecipee(monster : string) : any {
    return recipees.find(o => o.result == monster)
}

let recipees = [
    { result: "Red Dragon", a: "Green Dragon", b : "*Beast"},
    { result: "Green Dragon", a: "Dragurn", b : "Anchorman"},
    { result: "Dragurn", a: "Jargon", b:"*Nature"},
    { result: "Jargon", a: "Frou-Fry", b:"*Nature"},
    { result: "Frou-Fry", a: "Argon Lizard", b: "*Beast"}
]

export function getLocation(monster : string) : any{
    let loc = locations.find(o => o.monster == monster)
    return (loc != null)? loc.location : ""
}


// Ideally sorted by monster
let locations = [
    {monster: "Argon Lizard", location: "deez nuts"},
    {monster: "Anchorman", location: "gogogo"},
    // Also like wildcard stupidass monsters of an specific class, like the simplest you can find:
    {monster: "*Beast", location: "Quiller, Dessert World"},
    {monster: "*Nature", location: "Coastline, (Great Log)"}
]