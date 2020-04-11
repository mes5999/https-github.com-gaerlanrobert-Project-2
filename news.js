module.exports = {
    topic: async (apiKey, country, topic, from) => {
        const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${topic}&from=${from}`);
        const data = await response.json();
        return data;
    },
};

// eslint-disable-next-line import/prefer-default-export
// export const topic = async (apiKey, country, q, from) => {
//     const response = await fetch(`http://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}&q=${q}&from=${from}`);
//     const data = await response.json();
//     return data;
// };
