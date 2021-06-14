import { getColors, setColor } from "./data.js"

const colors = getColors()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "color") {
//             window.alert(`User chose color ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

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