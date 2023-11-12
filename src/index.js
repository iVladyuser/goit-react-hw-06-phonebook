import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если приложение использует библиотеку react-router-dom для маршрутизации, необходимо дополнительно настроить компонент <BrowserRouter>, передав в пропе basename точное название твоего репозитория. Слеш в начале строки обязателен.

// <BrowserRouter basename="/your_repo_name">
//   <App />
// </BrowserRouter>