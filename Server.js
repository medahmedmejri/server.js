const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:2222'
}));

             
  
const router = require('./router/index.js');
const routers = require('./router/product.js');

const url = 'mongodb://localhost:27017/data';
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);
app.use('/api', routers);

async function connectDb() {
    try {
        await mongoose.connect(url);
        console.log("Database connected");
    }
    catch (error) {
        console.error("Failed to connect to database:", error);
    }
}

connectDb();
  
const port = 2222;
app.listen(port, () => {
    console.log("App listening at http://localhost:", port);
});