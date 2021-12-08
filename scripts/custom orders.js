import { customCarOrders, getColors, getInteriors, getTechnologies, getWheelPackages } from "./database.js";


const colors = getColors()
const wheelPackages = getWheelPackages()
const interiors = getInteriors()
const technologies = getTechnologies()

const buildOrderItem = (order) => {
    const foundColors = colors.find((color) => {return color.id === order.colorId})
    const foundWheels = wheelPackages.find((wheelPackage) => {return wheelPackage.id === order.wheelId})
    const foundInteriors = interiors.find((interior) => {return interior.id === order.interiorId}) 
    const foundTechnologies = technologies.find((technology) => { return technology.id === order.technologyId}) 
    
    const totalCost = 15000 + foundColors.price + foundWheels.price + foundInteriors.price + foundTechnologies.price;

    const costString = totalCost.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Your ${foundColors.name} car includes ${foundInteriors.name} interior, ${foundTechnologies.name} technology, ${foundWheels.name} wheels, and costs ${costString}
    </li>`
}

export const Orders = () => {
    const orders = customCarOrders()
    let html = "<ul>"
   
    const listItems = orders.map(buildOrderItem)
    
    html += listItems.join("")
    html += "</ul>"
    
    return html
}