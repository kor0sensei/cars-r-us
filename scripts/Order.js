import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./data.js"

const colors = getColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    let totalCost = 0

    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    totalCost += foundColor.price
// ======================================================
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price
// ======================================================
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    totalCost += foundTechnology.price
// ======================================================\
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += foundWheel.price
// ======================================================
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString} placed on ${order.timestamp}
    </li>`
    }
export const CarOrders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const itemChoices = orders.map(buildOrderListItem)

    html += itemChoices.join("")
    html += "</ul>"

    return html
}