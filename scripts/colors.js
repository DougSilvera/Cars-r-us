import { getColors } from "./database.js";

const colors= getColors()

export const carColors = () => {
    let html= `<select id="color">
    <option value="0">Choose Color</option>`
    const listColors = colors.map(color => {
        return `
            <option value="1">${color.name}</option>
            `
    })
    html += listColors.join("")
    html += "</select>"
    return html
}