import {CarColors} from "./Color.js"
import {CarInteriors} from "./Interior.js"
import {CarTechnologies} from "./Technology.js"
import {CarWheels} from "./Wheel.js"
import {CarOrders} from "./Order.js"
import {addCustomOrder} from "./data.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Paint Color</h2>
                ${CarColors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${CarInteriors()}
            </section>
            <section class="choices__technolgies options">
                <h2>Technologies</h2>
                ${CarTechnologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${CarWheels()}
            </section>
        </article>        
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
                <h2>Custom Car Orders</h2>
                ${CarOrders()}
        </article>
    `
}