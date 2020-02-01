import mongoose from 'mongoose';

//const uri = "'mongodb://localhost:27017/mvn"
const uri = 'mongodb+srv://user_mvn:lFa72L8rMc5QW4hK@mvn-xjaet.mongodb.net/test?retryWrites=true&w=majority'
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(uri,config).then(db=>console.log('BD conect'))
.catch(err=> console.log('error',err))