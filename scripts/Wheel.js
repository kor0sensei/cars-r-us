import { getWheels, setWheel } from "./data.js"

const wheels = getWheels()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "wheel") {
//             window.alert(`User chose wheel ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const CarWheels = () => {
    let html = "<ul>"

    const itemChoices = wheels.map(
    (wheel) => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}