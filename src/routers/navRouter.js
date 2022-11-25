const express = require('express');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    const result = {
        firstName: "Jonah",
        lastName: "Kim"
    };
    res.status(200).send(result);
})

module.exports = router