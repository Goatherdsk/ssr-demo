import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

// 设置路由和处理程序
app.get('/', (req, res) => {
  // 通过React的SSR功能将React组件渲染为HTML字符串
  const content = ReactDOMServer.renderToString(<App />);

  // 返回渲染好的HTML
  const html = `
    <html>
      <head>
        <title>React SSR Demo</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

// 设置静态文件目录
app.use(express.static('public'));

// 启动服务器
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
