import { carsRUs } from "./Cars-R-Us.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("state of data has changed. Regenerating HTML...")
    renderAllHTML()
})