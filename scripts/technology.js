import { getTechnologies } from "./database.js"

const technologies = getTechnologies()




export const carTechnologies = () => {
    let html= `<select id="Technology Packages">
    <option value="0">Choose Technology Package</option>`
    const listTechnologies = technologies.map(technology => {
        return `
            <option value="1">${technology.name}</option>
            `
    })
    html += listTechnologies.join("")
    html += "</select>"
    return html
}