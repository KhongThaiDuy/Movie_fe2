const express = require('express');
const app = express();
const path = require('path');

// Cấu hình express để serve file tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Route mặc định cho trang index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view', 'index.html'));
});

// Chạy server trên port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
