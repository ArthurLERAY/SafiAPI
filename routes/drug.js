'use strict';
const router = require('express').Router();
const Medicine = require('../src/Classes/Medicine');
const Offer = require('../src/Classes/Offer');

router.get('/stats', async (req, res) => {

    let donationList = [];
    const drugs = await Offer.getAll();
    // TODO may have to precise the index [0] after drugs because of querybuilder arch
    for (const drug of drugs) {

        const donation = await Offer.getWhere('medicine_id', drug.id);
        donationList.push({
            drug_id: drug.id,
            drug_label: drug.commercialName,
            drug_donation: donation.quantity,
            visitReport_id: donation.visitReport_id
        });

    }
    res.send(donationList);

});

router.get('/list', async (req, res) => {

    const drugsList = await Medicine.getAll();
    res.send(drugsList);

});

router.get('/find/:id', async (req, res) => {

    const drug = await Medicine.getWhereId(req.params.id);
    res.send(drug);

});

router.post('/add', async (req, res) => {

    Medicine.create({
        commercialName: req.body.commercialName,
        samplePrice: req.body.samplePrice,
        code: req.body.code,
        composition: req.body.composition,
        effects: req.body.effects,
        contraindication: req.body.contraindication,
        family_id: req.body.family_id
    })
        .then(resp => {
                res.sendStatus(201);
            }
        )
        .catch(err => {
                console.error(err);
                res.sendStatus(400)
            }
        );

});


module.exports = router;
