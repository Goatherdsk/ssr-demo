import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入你的 MobX Store
import AppStore from './stores/AppStore'; // 假设这是你的 MobX Store

const appStore = new AppStore(); // 创建你的 MobX Store 实例

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider appStore={appStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
