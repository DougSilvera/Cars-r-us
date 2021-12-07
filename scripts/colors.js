import { getColors, setOrderColor } from "./database.js";

const colors= getColors()

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "color") {
            setOrderColor (parseInt(event.target.value))
        }
    }
)

export const carColors = () => {
    let html= `<select id="color">
    <option value="0">Choose Color</option>`
    const listColors = colors.map(color => {
        return `
            <option name="color" value=${color.id}>${color.name}</option>
            `
    })
    html += listColors.join("")
    html += "</select>"
    return html
}