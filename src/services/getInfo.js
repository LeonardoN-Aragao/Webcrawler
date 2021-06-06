const axios = require('axios')
const cheerio = require('cheerio')

module.exports = async function getInfo(url) {
  
    const res = await axios.get(url).then()
    const page = res.data
    const $ = cheerio.load(page)

    var name = $('h1.header-product__title').text()
    var image = $('img.showcase-product__big-img').attr('src')
    var price = $('span.price-template__text').text()
    var available = true

    if(!price){
        available = false
        name = $('h1.header-product__title--unavailable').text()
        image = $('img.unavailable__product-img').attr('src')
    }
    else{
        //Converte o formato do numero
        var num_part = price.split(',')
        num_part[0] = Number(num_part[0].replace('.',''))
        num_part[1] = Number(num_part[1])/100

        price = num_part[0] + num_part[1]
    }

    return { name, price, image, available, url}
}

