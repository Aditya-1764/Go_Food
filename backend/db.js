const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://adityamangal1764:aditya123@cluster0.wjxapss.mongodb.net/GoFoodMern?retryWrites=true&w=majority'

const mongoDB=async()=>{
    await mongoose.connect(mongoURI,async(err,result)=>{
        if(err)console.log("---",err);
        else{
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err)console.log(err);
                else{
                    global.food_items = data;
                    global.foodCategory = catData;
                }

            })
            




                // if(err)console.log(err);
                // else{
                //     global.food_items = data;
                //     // console.log(global.food_items)
                // }
            })
        }
    }
    );
}

module.exports = mongoDB;