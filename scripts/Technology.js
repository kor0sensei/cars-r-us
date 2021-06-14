import { getTechnologies, setTechnology } from "./data.js"

const technologies = getTechnologies()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "technology") {
//             window.alert(`User chose technology ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const CarTechnologies = () => {
    let html = "<ul>"

    const itemChoices = technologies.map(
    (technology) => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.technology}
        </li>`
    }
)
    html += itemChoices.join("")
    html += "</ul>"

    // console.log(itemChoices.join(""))
    return html
}