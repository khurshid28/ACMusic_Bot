const mongoose = require('mongoose')
MongoDB_Adress="mongodb+srv://khurshid:Khurshid-2827@bot.f48ga.mongodb.net/MusicBot?retryWrites=true&w=majority"
const connection =async()=>{
    mongoose.connect(MongoDB_Adress, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

connection()
.then((v)=>{
    console.log("Mongo db connection")
})
.catch((err)=>{
    console.log("Mongo db Connection Error")
})


module.exports={
    mongoose
}