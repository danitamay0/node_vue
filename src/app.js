const express = require('express');
const app=express();
const path = require('path');
const router=require('./routes');
const morgan =require('morgan');
const cors = require('cors');


app.use(morgan('tiny'));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use('/api',router);
//middleware history vue debe estar antes de el urlenconde

//history permite actualizar la page y que quede en la ruta spa
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port',process.env.PORT || 3000);

module.exports = app;
