import express from 'express'
import cors from 'cors';
import { PORT, mongoDBURL, FEAddress } from './config.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: '1mb' }));

// Sử dụng CORS middleware để cho phép các yêu cầu từ origin http://localhost:5173
app.use(cors({
    origin: [`${FEAddress}`],  // Update this with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Sử dụng middleware để xử lý cookie
app.use(cookieParser());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send(`Chào mừng đến với web của hungblqn`);
});

// Sử dụng các router đã được định nghĩa
//app.use('/test', testRoute);

// Kết nối đến MongoDB và khởi động máy chủ backend
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Đã kết nối với MongoDB');
        app.listen(PORT, () => {
            console.log(`Server backend đang chạy ở cổng ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });