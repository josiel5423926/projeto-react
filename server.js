import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import axios from 'axios';

import AppComponent from './src/App';

const app = express();

app.use(express.static('dist/public'));

app.get('/', function(req, res) {
  axios.get('http://localhost:3030/comentarios').then(function(response) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React no Servidor </title>
      </head>
      <body>
        <div id="app">
          ${ReactDOM.renderToString(<AppComponent comentarios={response.data.slice(0, 2)} />)}
        </div>
        <script>
          localStorage.setItem('comentarios', '${JSON.stringify(response.data)}')
        </script>
        <script src="bundle_client.js"></script>
      </body>
      </html>
    `
    res.send(html);
  })
});

app.get('/comentarios', function(req, res) {
  res.send([
    {
      id: '001',
      name: 'Maria Junior',
      message: 'Primeira Mensagem'
    },
    {
      id: '002',
      name: 'Carlos Alberto',
      message: 'Segunda Mensagem'
    },
    {
      id: '003',
      name: 'nazaré',
      message: 'Terceira Mensagem'
    },
    {
      id: '004',
      name: 'Gustavo',
      message: 'Quarta Mensagem'
    }
  ])
})

app.listen(3030, function() {
  console.log('Servidor está ouvindo na porta 3030!');
})