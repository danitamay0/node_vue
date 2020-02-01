const app = require('./app');

app.listen(app.get('port'),()=>{
        require('./database');
        console.log('coneccion al puerto : ' ,app.get('port') );
        
})