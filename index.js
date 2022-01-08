const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASS, MONGO_IP, MONGO_PORT } = require('./config/config');
const postRoutes = require('./routes/postRoutes');
const mongoDB = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

//connect to mongoose
const connectMongoDB = () => {
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => {
            console.log(err)
            console.log("MongoDB Connection Error. Please make sure that MongoDB is running.");
            setTimeout(connectMongoDB, 5000)
        });
}
//connect to mongoose
connectMongoDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This :)');
});

app.use('/api/v1/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
