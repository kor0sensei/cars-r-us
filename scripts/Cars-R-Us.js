import {CarColor} from "./Color.js"
import {CarInterior} from "./Interior"
import {CarTechnology} from "./Interior.js"
import {CarWheel} from "./Wheel.js"

export const CarsRus = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Paint Color</h2>
                ${CarColor()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${CarInterior()}
            </section>
            <section class="choices__technolgies options">
                <h2>Technologies</h2>
                ${CarTechnology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${CarWheel()}
            </section>
        </article>        
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            $
        </article>
    `
}