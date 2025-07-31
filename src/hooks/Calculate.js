export default function Calculate(amount, sellCurrency, buyCurrency, data){

  if (buyCurrency === "NIL") return {
    msg: "Please select a buy currency.", 
    color: "Pink"
  };
  
  if (isNaN(amount) === true || amount === 0) return {
    msg: "Please give a numeric or non-zero amount.", 
    color: "Pink"
  };

  const sellCurrencyObj = data.filter(val => val.id === sellCurrency);
  const buyCurrencyObj = data.filter(val => val.id === buyCurrency);

  if (sellCurrency === "HKD") {
    let quote = Number(amount) / buyCurrencyObj[0].sell;

    if (Number(amount) > 50000) return {
      msg: "Sorry, we cannot exchange over $50,000 HKD.  Please select a smaller amount",
      color: "Pink"
    };

    return {
      msg: "Based on today's rates, we can offer " + quote.toFixed(2) + " " +  buyCurrencyObj[0].id + " for your banknotes.  This is based on our " + buyCurrencyObj[0].id + " sell rate of " + buyCurrencyObj[0].sell + " (" + amount + " ÷ " + buyCurrencyObj[0].sell + ").",
      color: "SkyBlue"
    };
  } 
  
  if (sellCurrency !== "HKD") {
    let quote = (Number(amount) * sellCurrencyObj[0].buy);

    if (Number(quote) > 50000) return {
      msg: "Sorry, we cannot exchange over an equivalent of $50,000 HKD.  Please select a smaller amount.",
      color: "Pink"
    };

    return {
      msg: "Based on today's rates, we can offer " + quote.toFixed(2) + " HKD for your banknotes.  This is based on our " + sellCurrencyObj[0].id + " buy rate of " + sellCurrencyObj[0].buy + " (" + amount + " * " + sellCurrencyObj[0].buy + ").",
      color: "SkyBlue"
    };
  };
};