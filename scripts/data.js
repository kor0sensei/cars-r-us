const database = {
    color: [
        {id: 1, color: "Silver", price: 650},
        {id: 2, color: "Midnight Blue", price: 1000},
        {id: 3, color: "Firebrick Red", price: 1600},
        {id: 4, color: "Spring Green", price: 900}
    ],
    interior: [
        {id: 1, interior: "Beige Fabric", price: 500},
        {id: 2, interior: "Charcoal Fabric", price: 700},
        {id: 3, interior: "White Leather", price: 1000},
        {id: 4, interior: "Black Leather", price: 1200}
    ],
    technology: [
        {id: 1, technology: "Basic Package", price: 300},
        {id: 2, technology: "Navigation Package", price: 800},
        {id: 3, technology: "Visibilty Package", price: 1300},
        {id: 4, technology: "Ultra Package", price: 2000}
    ],
    wheel: [
        {id: 1, wheel: "17-inch Pair Radial", price: 600},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 1000},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 1400},
        {id: 4, wheel: "18-inch Pair Spoke Black", price: 2000}
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 4,
            technologyId: 4,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],


    }

export const getColors = () => {
    return database.paintColor.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.metals.map(wheel => ({...wheel}))
}