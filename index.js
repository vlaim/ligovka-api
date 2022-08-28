const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;
const sourceUrl = process.env.SOURCE_URL || 'https://ligovka.ru';

app.use(express.json())

function asyncWrapper(fn) {
  return (req, res, next) => {
    return Promise.resolve(fn(req))
      .then((result) => res.send(result))
      .catch((err) => next(err))
  }
}

const getExchangeRates = async () => {
	return JSDOM.fromURL(sourceUrl).then(dom => {
		let nodes = dom.window.document.querySelectorAll(".money_price")
  		return [...nodes].map(n => n.textContent)
	});
};

const formatExchangeRate = async() => {
	let result = await getExchangeRates();
	return {
		'usd': {
			'buy': {
				1:  result[0],
				100: result[6],
				1000: result[12],
			}, 
			'sell':{
				1:  result[1],
				100: result[7],
				1000: result[13],
			}
		},
		'eur': {
			'buy' : {
				1:  result[2],
				100: result[8],
				1000: result[14],
			},
			'sell': {
				1:  result[3],
				100: result[9],
				1000: result[15],
			}
		}
	}
}


app.get('/', asyncWrapper(formatExchangeRate));


console.log(`[HTTP] Listening on 0.0.0.0:${port}...`);

app.listen(port);