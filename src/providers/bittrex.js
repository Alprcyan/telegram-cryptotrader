const fetch = require("isomorphic-fetch");
const redisClient = require("../redis-client");

module.exports = (base, quote) => {
  const redisKey = `Bittrex:${base}-${quote}`;
  const requestURL = `https://bittrex.com/api/v1.1/public/getticker?market=${quote}-${base}`;

  return redisClient.getAsync(redisKey).then((data) => {
    if (data != null) {
      return parseFloat(data);
    } else {
      return fetch(requestURL).then((resp) => {
        if (resp.status != 200) throw new Error(resp.status);
        return resp.json();
      }).then((data) => {
        const price = parseFloat(data.result.Last);
        redisClient.setex(redisKey, 30, price);
        return price;
      });
    }
  });
};
