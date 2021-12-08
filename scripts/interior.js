import { getInteriors, setOrderColor, setOrderInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "Interior") {
            setOrderInterior (parseInt(event.target.value))
        }
    }
)



export const carInteriors = () => {
    let html= `<select id="Interior">
    <option value="0">Choose Interior Option</option>`
    const listInteriors = interiors.map(interior => {
        return `
            <option name="Interior" value=${interior.id}>${interior.name}</option>
            `
    })
    html += listInteriors.join("")
    html += "</select>"
    return html
}