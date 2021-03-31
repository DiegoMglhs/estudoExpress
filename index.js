const { request, response } = require('express');
const express = require('express');
const app = express();

// console.log(app);
/**
 * GET:  buscar info no back-end
 * POST: criar infos no back-end
 * PUT/patch: Alterar uma info no back-end 
 * DELETE: deletar uma info no back-end
 */

/**
 * Tipos de parâmetros:
 *  
 * QUERY PARSMS: Vamos usar principalmente para filtros e paginação
 * ROUTE PARAMS: Ele serve para Identificar recursos na hora de atualizaar ou deletar.
 * REQUEST PARAMS:
 * 
 */



app.get('/projects', (request,response) => {
    const {title, owner} = request.query;
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 100'
    ]);
});

app.post('/projects', (request,response) =>{
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.put('/projects/:id', (request,response) =>{
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
})

app.delete('/projects/:id', (request,response) =>{
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ]);
})

app.listen(3000,() => {
    console.log('servidor rodando');
});

