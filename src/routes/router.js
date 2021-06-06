const express = require('express')
const router = express.Router()
const getInfo = require('../services/getInfo')

router.use(express.json())

/*
Rota status
  -Request:
    Método: GET
    Rota: /status
  -Response: 
    Status Code: 200
    Corpo: “OK”

Rota scrap Product
  -Request:
    Método: POST
    Rota: /scrap_product
    Corpo: {“url”: “url_do_produto”}
  -Response:
    Status Code: 200
    Corpo: JSON
*/

router.post('/scrap_product', async (req,res) => {
    const data = await getInfo(req.body.url)
    res.status(200).send({
      name: data.name,
      image_primary: data.image,
      price: data.price,
      availability: data.available,
      url: data.url
    });
})

router.get('/status', (req, res) => {
	res.send('ok')
	res.status(200)
})

module.exports = router;