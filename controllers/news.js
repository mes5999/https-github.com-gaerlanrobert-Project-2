const fetch = require('node-fetch');

module.exports = {
    async topic(apiKey, country, topic) {
        const today = new Date();
        const from = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
        const url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}&from=${from}`;
        const response = await fetch(url);
        const { status, totalResults, articles } = await response.json();
        // console.log('---------- status ');
        // console.log(status);
        // console.log('---------- status ');
        // console.log('---------- totalResults ');
        // console.log(totalResults);
        // console.log('---------- totalResults ');
        // console.log('---------- articles ');
        // console.log(articles);
        // console.log('---------- articles ');
        return articles;
    },
};

// eslint-disable-next-line import/prefer-default-export
// export const topic = async (apiKey, country, q, from) => {
//     const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${q}&from=${from}`);
//     const data = await response.json();
//     return data;
// };
