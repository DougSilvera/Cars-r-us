import { getWheelPackages } from "./database.js"

const wheelPackages = getWheelPackages()




export const carWheelPackages = () => {
    let html= `<select id="Wheel and Tire Packages">
    <option value="0">Choose wheel/tire package</option>`
    const listWheelPackages = wheelPackages.map(wheelPackage => {
        return `
            <option value="1">${wheelPackage.name}</option>
            `
    })
    html += listWheelPackages.join("")
    html += "</select>"
    return html
}