
const mongoose =require("mongoose")

const DB= "mongodb+srv://randeep986:randeep@cluster0.ywilz3b.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})