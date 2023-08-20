const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apicache = require('apicache')
const cors = require('cors');

//Env vars
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

// Init cache
let cache = apicache.middleware

router.use(cors());
router.get('/*', cache('2 minute'), async (req, res) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query,
            [API_KEY_NAME]: API_KEY_VALUE,
        })

        console.log('params are ' + params);
        const apiRes = await needle('get', `${API_BASE_URL}?${params}`)
        const data = apiRes.body

        // Log the request to the public API

        console.log(process.env.NODE_ENV.trim());
        // if (process.env.NODE_ENV.trim() === "production") {
        //     app.use(express.static("build"));
        //     app.get("*", (req, res) => {
        //       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
        //     });
        //   } 
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: ${API_BASE_URL}?${params}`)
        }
        console.log('printing data from server')
        console.log(data)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error })
        console.log('eror!')
    }
})

module.exports = router
