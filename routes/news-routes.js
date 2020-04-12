const news = require('./news');

module.exports = (app) => {
    app.get('/api/news/:topic', (req, res) => {
        news.topic(req.params.topic)
            .then((data) => {
                console.log(data);
                res.send(data);
            });
    });
};
