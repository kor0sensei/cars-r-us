import { getInteriors } from "./data.js"

const interiors = getInteriors

export const CarInteriors = () => {
    let html = "<ul>"

    const itemChoices = interiors.map(
    (interior) => {
        return `<li>
            <input type="radio" name="style" value="${interior.id}" /> ${interior.interior}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}