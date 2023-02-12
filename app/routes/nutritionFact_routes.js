const express = require('express')
const passport = require('passport')
const Soda = require('../models/soda')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

//! Routes

//* POST -> create 
// POST /nutritionFacts/:sodaId
router.post('/nutritionFacts/:sodaId', removeBlanks, (req, res, next) => {
    const nutritionFact = req.body.nutritionFact
    const sodaId = req.params.sodaId

    Soda.findById(sodaId)
        .then(handle404)
        .then(soda => {
            console.log('soda: ', soda)
            console.log('nutritionFact: ', nutritionFact)

            soda.nutritionFacts.push(nutritionFact)

            return soda.save()
        })
        .then(soda => res.status(201).json({ soda: soda }))
        .catch(next)
})

//* PATCH -> update nutrition fact
// PATCH /nutritionFacts/:sodaId/:nutritionId
router.patch('/nutritionFacts/:sodaId/:nutritionFactId', requireToken, removeBlanks, (req, res, next) => {
    const { sodaId, nutritionFactId } = req.params

    Soda.findById(sodaId)
        .then(handle404)
        .then(soda => {
            const theNutritionFact = soda.nutritionFacts.id(nutritionFactId)
            requireOwnership(req, soda)
            theNutritionFact.set(req.body.nutritionFact)
            return soda.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//* DELETE -> remove a nutrition fact
// DELETE /nutritionFacts/:sodaId/:nutritionId
router.delete('/nutritionFacts/:sodaId/:nutritionFactId', requireToken, (req, res, next) => {
    const { sodaId, nutritionFactId } = req.params
    Soda.findById(sodaId)
        .then(handle404)
        .then(soda => {
            const theNutritionFact = soda.nutritionFacts.id(nutritionFactId)

            requireOwnership(req, soda)
            
            theNutritionFact.remove()

            return soda.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


//! Export Router
module.exports = router