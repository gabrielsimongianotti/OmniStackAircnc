const Spot = require('../models/Spot.js');

const User = require('../models/User.js');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({techs:tech});

        return res.json(spots);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,                //tira o space da string
            techs: techs.split(',').map(techs => techs.trim()),
            price
        })

        // console.log(req.file);
        return res.json(spot);
    }
}