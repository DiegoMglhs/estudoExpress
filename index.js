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
    const {id} = request.params; // aqui pegamos nosso ID
    const {title, owner} = request.body; //retornando uma nova informação

    // aqui usamos o findIndex para percorrer todo o array atrás do id
    // findIndex vai percorrer todos os projetos, e uma vez que ele percorrer na variavel project
    // caso ela seja satisfeita e retornar true, ela vai me retornar o id que estou passando (project => project.id === id)
    const projectIndex = projects.findIndex(project => project.id === id);
    
    if (projectIndex < 0){
        return response.status(400).json({error : 'Projeto não foi encontrado'});
    }
    
     //  Agora que tenho o indice vou criar uma nova informação do projeto
     
    const project = {
        id,
        title,
        owner,
    }
    
    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request,response) =>{
    const {id} = request.params;
    
    const projectIndex = projects.findIndex(project => project.id === id);
    
    if (projectIndex < 0){
        return response.status(400).json({error : 'Projeto não foi encontrado'});
    }
projects.splice(projectIndex, 1); 
    return response.status(204).send();
})

app.listen(3000,() => {
    console.log('servidor rodando');
});

