const path = require('path');
const news = require('./news');

module.exports = (app) => {
    app.get('/api/news/:topic', (req, res) => {
        news.topic(req.params.topic)
            .then((data) => {
                console.log(data);
                res.send(data);
            });
    });

    app.get('/news-test', (req, res) => {
        news.topic('coronavirus')
            .then((data) => {
                console.log('------------------------  data');
                console.log(data);
                console.log('------------------------  data');
                // const array = [];
                // // eslint-disable-next-line no-restricted-syntax
                // for (const article of data.splice(0, 5)) {
                //     array.push({
                //         title: article.title.split('-')[0],
                //         source: article.source.name,
                //         url: article.url,
                //         urlToImage: article.urlToImage,
                //     });
                // }
                // const hbsObject = {
                //     articles: array,
                // };
                // res.render('body', hbsObject);
            })
            .catch((error) => {
                console.log(error);
                res.send(error);
            });
    });

    app.get('/members-test', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/members.html'));
    });
};
