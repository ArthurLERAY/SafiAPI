'use strict';
const router = require('express').Router();
const tables = require('../src/database/Models/loader');

router.get('/stats', async (req, res) => {

    let donationList = [];
    const drugs = await tables.Drug.query();
    // TODO may have to precise the index [0] after drugs because of querybuilder arch
    for (const drug of drugs) {

        const donation = await tables.Donate.query().where('drug_id', drug.id);
        donationList.push({
            drug_id: drug.id,
            drug_label: drug.label,
            drug_donation: donation.qte_don,
            visitReport_id: donation.visitReport_id
        });

    }
    res.send(donationList);

});

router.get('/list', async (req, res) => {

    const drugsList = await tables.Drug.query();
    res.send(drugsList);

});

router.get('/find/:id', async (req, res) => {

    const drug = await tables.Drug.query().findById(req.params.id);
    res.send(drug);

});

router.post('/add', async (req, res) => {

    tables.Drug.query().insert({
        label: req.body.label,
        samplePrice: req.body.samplePrice,
        legalSubmission: req.body.legalSubmission,
        commercialName: req.body.commercialName,
        composition: req.body.composition,
        effects: req.body.effects,
        counterIndicator: req.body.counterIndicator,
        familly_id: req.body.familly_id
    })
        .then(resp => {
                res.sendStatus(201);
            }
        )
        .catch(err => {
                res.sendStatus(400)
            }
        );

});


module.exports = router;
