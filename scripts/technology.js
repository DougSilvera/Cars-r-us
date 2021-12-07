import { getTechnologies, setOrderTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "Technology Packages") {
            setOrderTechnology (parseInt(event.target.value))
        }
    }
)


export const carTechnologies = () => {
    let html= `<select id="Technology Packages">
    <option value="0">Choose Technology Package</option>`
    const listTechnologies = technologies.map(technology => {
        return `
            <option name="Technology Packages" value=${technology.id}>${technology.name}</option>
            `
    })
    html += listTechnologies.join("")
    html += "</select>"
    return html
}