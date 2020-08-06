const router = require('express').Router();
const path = require('path');
const Doggo = require('../models/Doggo.js');

router.get("/add-dog", (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/doggos/add-dog.html'));
})

router.post("/add-dog", async (req, res) => {
    const { doggo, age, breed, picture1, picture2, description, picture3 } = req.body;

    if (doggo && age && breed && picture1 && description && picture2 && picture3) {

        try {

            const createdDoggo = await Doggo.query().insert({

                doggo,
                age,
                breed,
                picture1,
                description,
                picture2,
                picture3

            })
            return res.send({
                response: `Doggo ${createdDoggo.doggo} has been added to our base`
            });

        } catch (error) {
            return res.status(500).send({
                response: "Something went wrong with the database" + error
            });
        }

    }
});

module.exports = router;