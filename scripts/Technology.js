import { getTechnologies } from "./data.js"

const technologies = getTechnologies()

export const CarTechnologies = () => {
    let html = "<ul>"

    const itemChoices = technologies.map(
    (technolgy) => {
        return `<li>
            <input type="radio" name="style" value="${technolgy.id}" /> ${technolgy.technology}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}