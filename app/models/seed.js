const mongoose = require('mongoose')
const Coffee = require('./coffee')
const db = require('../../config/db')

const startCoffees = [
    {name: 'Columbia', brand: 'Gevalia Kaffe', ounces: 12},
    {name: 'Snickernut Cookie', brand: 'Cafe Ole by H-E-B', ounces: 12},
    {name: 'Dulce De Leche', brand: 'Tejas Cafe', ounces: 11},
    {name: 'Earlywine Breakfast Blend', brand: 'Independence Coffee', ounces: 12},
    {name: 'Cinnamon Hazelnut', brand: 'Via Bom Dia', ounces: 12},
]


mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Coffee.deleteMany()
            .then(deletedCoffees => {
                console.log('deleted coffees: ', deletedCoffees)
                // now we add our pets to the db
                Coffee.create(startCoffees)
                    .then(newCoffees => {
                        console.log('new coffees: ', newCoffees)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })