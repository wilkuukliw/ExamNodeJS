const router = require("express").Router();

router.get("/setsessionvalue", (req, res) => {
    req.session.myValue = req.sessionID; 
    return res.send({ response: "SessionID is set to " + req.sessionID }); // takes the value from the request and dynamically set it here
});

router.get("/getsessionvalue", (req, res) => {
    return res.send({ response: req.sessionID });
});

module.exports = router;