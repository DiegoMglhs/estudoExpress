const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

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
 * REQUEST Body: Resto do conteudo na hora de criar ou editar um recurso
 * 
 */

const projects = [];

app.get('/projects', (request,response) => {
    // const {title, owner} = request.query;
    
    console.log(projects);
    return response.json(projects);
});

app.post('/projects', (request,response) =>{
    const {title, owner} = request.body;
    
    const project = {id: uuidv4(), title, owner,};

    projects.push(project); // esse push vai jogar a criação do nosso projeto para o array.
    console.log(project.id);

    return response.json(project); //sempre retornar o projeto recem criado e nunca exibir a lista completa.
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

