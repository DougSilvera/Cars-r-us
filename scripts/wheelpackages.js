import { getWheelPackages, setOrderWheel } from "./database.js"

const wheelPackages = getWheelPackages()

document.addEventListener(
    "change", (event) => {
        if (event.target.id === "Wheel Packages") {
            setOrderWheel (parseInt(event.target.value))
        }
    }
)


export const carWheelPackages = () => {
    let html= `<select id="Wheel Packages">
    <option value="0">Choose wheel package</option>`
    const listWheelPackages = wheelPackages.map(wheelPackage => {
        return `
            <option name="wheel packages" value=${wheelPackage.id}>${wheelPackage.name}</option>
            `
    })
    html += listWheelPackages.join("")
    html += "</select>"
    return html
}