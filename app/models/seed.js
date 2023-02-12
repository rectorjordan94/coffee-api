const mongoose = require('mongoose')
const Soda = require('./soda')
const db = require('../../config/db')

const startSodas = [
    {name: 'Sprite', details: 'A lemon-lime soda with 100% natural flavors', hasCaffeine: false},
    {name: 'Coca-Cola', details: `Enjoy Coca-Cola's crisp, delicious taste with meals, on the go, or to share`, hasCaffeine: true},
    {name: 'Coke Zero', details: 'Coca-Cola Zero Sugar has a great taste with zero sugar and calories', hasCaffeine: true},
    {name: 'Dr Pepper', details: 'A signature blend of 23 flavors makes every sip of Dr Pepper truly unique', hasCaffeine: true},
    {name: 'Original Mtn Dew', details: 'The original, the one that started it all. MTN DEW® exhilarates and quenches with its one of a kind taste. ', hasCaffeine: true},
    
]


mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Soda.deleteMany()
            .then(deletedSodas => {
                console.log('deleted sodas: ', deletedSodas)
                // now we add our pets to the db
                Soda.create(startSodas)
                    .then(newSodas => {
                        console.log('new sodas: ', newSodas)
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