const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes.js');

const app = express();

mongoose.connect('mongodb+srv://suubmundo:NgUy7WzdgqmAuAJH@aircnc-tesgy.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//cors configura quem pode acessar a api ex
//app.use(cors({origin: 'http:localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000);