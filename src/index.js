const app = require('./app');

app.listen(app.get('port'),()=>{

        console.log('coneccion al puerto : ' ,app.get('port') );
     
})