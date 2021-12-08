import { carColors } from "./colors.js";
import { Orders } from "./custom orders.js";
import { addCustomOrder } from "./database.js";
import { carInteriors } from "./interior.js";
import { carTechnologies } from "./technology.js";
import { carWheelPackages } from "./wheelpackages.js";

document.addEventListener(
    "click", (event) => {
        if (event.target.id ==="orderButton" ) {
            addCustomOrder()
        }
    }        
)

export const carsRUs = () => {
    return `
    <h1> Cars-R-Us Custom Orders</h1>
    
    <article class="menus">
        <section class="menus_colors options">
        <h2>Colors</h2>
        ${carColors()}
        </section>

        <section class="menus_interiors options">
        <h2>Interior Options</h2>
        ${carInteriors()}
        </section>
        
        <section class="menus_technologies options">
        <h2>Technology Packages</h2>
        ${carTechnologies()}
        </section>
        
        <section class="menus_wheelPackages options">
        <h2>Wheel and Tire Packages</h2>
        ${carWheelPackages()}
        </section>
    </article>
        
        
        

    <article>
        <button id="orderButton">Build your car!</button>
    </article>

    <article class="custom orders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>
    `
}