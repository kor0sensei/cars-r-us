import { getWheels} from "./data.js"

const wheels = getWheels()

export const CarWheels = () => {
    let html = "<ul>"

    const itemChoices = wheels.map(
    (wheel) => {
        return `<li>
            <input type="radio" name="style" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}