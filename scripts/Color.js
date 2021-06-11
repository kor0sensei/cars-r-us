import {getColors} from "./data.js"

const colors = getColors()

export const CarColors = () => {
    let html = "<ul>"

    const itemChoices = colors.map(
    (color) => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}