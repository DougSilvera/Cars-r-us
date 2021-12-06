import { getInteriors } from "./database.js"

const interiors = getInteriors()




export const carInteriors = () => {
    let html= `<select id="Interiors">
    <option value="0">Choose Interior Option</option>`
    const listInteriors = interiors.map(interior => {
        return `
            <option value="1">${interior.name}</option>
            `
    })
    html += listInteriors.join("")
    html += "</select>"
    return html
}