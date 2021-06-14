import { getInteriors, setInterior} from "./data.js"

const interiors = getInteriors()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "interior") {
//             window.alert(`User chose interior ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const CarInteriors = () => {
    let html = "<ul>"

    const itemChoices = interiors.map(
    (interior) => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}