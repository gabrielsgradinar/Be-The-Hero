const express = require('express');


const app = express();

app.get('/', (require, response) => {
    //return response.send('Hello World');
    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Gabriel'
    })
})

app.listen(3333)