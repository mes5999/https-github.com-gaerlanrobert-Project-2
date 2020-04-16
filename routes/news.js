const fetch = require('node-fetch');

module.exports = {
    async topic(topic) {
        const now = new Date();
        const apiKey = 'acef062b396a4219a8e009b9395a424d';
        const country = 'US';
        const from = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 5}`;
        const url = `http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}&sortBy=popularity&from=${from}`;
        // const url = `http://newsapi.org/v2/top-headlines?apiKey=${process.env.apiKey}&country=${country}&q=${topic}&sortBy=popularity&from=${from}`;
        const response = await fetch(url);
        const { articles } = await response.json();
        return articles;
    },
};

// eslint-disable-next-line import/prefer-default-export
// export const topic = async (apiKey, country, q, from) => {
//     const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${q}&from=${from}`);
//     const data = await response.json();
//     return data;
// };
