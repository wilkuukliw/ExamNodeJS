const router = require('express').Router();
const path = require('path'); // joins the specified paths into one
const Application = require('../models/Application.js');
const Doggo = require('../models/Doggo.js');

router.get('/apply', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/application/application.html'));
});

router.post('/apply', async (req, res) => {

    const { name, email, phone, doggo_id } = req.body;
    console.log(name, email, phone, doggo_id);

    if (name && email && phone && doggo_id) {

        try {

            const doggoFound = await Doggo.query().select().where('id', doggo_id).limit(1);
            if (doggoFound.length === 0) {
                return res.status(400).send({ response: "Verify the dog's identifier - we seem not to have it in our base anymore"
                });
            } else {

                const submittedApplication = await Application.query().insert({            //przekazywanie danych do modelu
                    name,
                    email,
                    phone,
                    doggo_id

                });

                return res.send({ response: `Succesfully aplied for adoption of our dog number ${submittedApplication.doggo_id} Please wait patiently for our response!`});
            }
        } catch (error) {
            return res.status(500).send({ response: "Something went wrong with the database" + error});
        }

    } else {

        return res.status(404).send({response: "Missing fields: name, email, phone, identifier"});

    }

});

module.exports = router;