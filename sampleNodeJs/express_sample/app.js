//expressを使用するための宣言
const express = require('express');
const app = express();
//ポート番号の指定
const port = 3000;

//任意のHTTPメソッドとパスにアクセスがあった時に実行される処理を記述
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});