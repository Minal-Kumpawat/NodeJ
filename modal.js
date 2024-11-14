const authors=new mongoose.Schema({
    name:{typeof:String,require:true},
    email:{typeof:String,require:true},
    password:{typeof:String,require:true},
    date:{typeof:date,require:false}
})

