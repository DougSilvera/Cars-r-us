


const database = {
    colors: [
        {id: 1, name: "Silver", price: 200}, 
        {id: 2, name: "Midnight Blue", price: 600}, 
        {id: 3, name: "Firebrick Red", price: 800}, 
        {id: 4, name: "Spring Green", price: 600} 
    ],
    interiors: [
        {id: 1, name:"Beige Fabric", price: 300},
        {id: 2, name:"Charcoal Fabric", price: 300},
        {id: 3, name:"White Leather", price: 2000},
        {id: 4, name:"Black Leather", price: 1500}
    ],
    technologies: [
        {id: 1, name: "Basic Package", details: "basic sound system", price: 500},
        {id: 2, name: "Navigation Package", details: "integrated navigation controls", price: 1000},
        {id: 3, name: "Visibilty Package", details: "front and rear cameras", price: 800},
        {id: 4, name: "Ultra Package", details: "navigation and visibility packages", price: 1500},
    ],
    wheelPackages: [
        {id: 1, name:"17-inch radial", price: 800},
        {id: 2, name:"17-inch radial black", price: 1000},
        {id: 3, name:"18-inch spoke silver", price: 1200},
        {id: 4, name:"18 inch spoke black", price: 1500},
    ],
    customCarOrders: [

    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheelPackages = () => {
    return database.wheelPackages.map(wheelPackage => ({...wheelPackage}))
}
export const customCarOrders = () => {
    return database.customCarOrders.map(customCarOrder => ({...customCarOrder}))
}

