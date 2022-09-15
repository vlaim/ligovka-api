# vlaim/ligovka-api

A simple API returns information about ***USD/EUR to RUB*** currency rates from [ligovka.ru](https://ligovka.ru) 

## Run with docker: 

```docker run -d -p 3000:3000 ghcr.io/vlaim/ligovka-api```

Then go to [http://localhost:3000/](http://localhost:3000/) 

## Example of response 

```
{
   "usd":{
      "buy":{
         "1":"63.00",
         "100":"63.10",
         "1000":"63.10"
      },
      "sell":{
         "1":"64.50",
         "100":"64.40",
         "1000":"64.40"
      }
   },
   "eur":{
      "buy":{
         "1":"64.10",
         "100":"64.40",
         "1000":"64.40"
      },
      "sell":{
         "1":"65.60",
         "100":"65.40",
         "1000":"65.40"
      }
   }
}
```

"1" - means the rate for buying/selling 1-99 X 

"100" - means the rate for buying/selling 1-999 X 

"1000" - means therate for buying/selling 1000+ X, 

where X is USD or EUR

Values are represented in **RUB** 

## Disclaimer 

According to ligovka.ru all rates have an informative purpose and under no circumstances are they a public offer determined by the provisions of Article 437(2) of the Civil Code of the Russian Federation.

Все курсы имеют информативную цель и ни при каких условиях не являются публичной офертой, определяемой положениями Статьи 437(2) ГК РФ.
