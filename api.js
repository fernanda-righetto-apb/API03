// 17/04  criar dois novos endpoints
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const mysql_config = require('./imp/mysql_config');
const functions = require('./imp/functions');
const { truncateSync } = require('fs');

const API_AVAILABILITY = true;
const API_VERSION = '1.0.0';


const app = express();
app.listen(3000,()=>{
    console.log("API está executando");
})

app.use((req,res,next)=>{
    if(API_AVAILABILITY){
        next()
    }else{
        res.json(functions.response('atenção','API está em manutenção. Sorry!',0,null));

    }
})


const connection = mysql.createConnection(mysql_config);

//inserindo o tratamento dos params -----------------------
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(cors());

//rotas 
//rota inicial (entrada)
app.get('/',(req,res)=>{
    res.json(functions.response("sucesso","API está rodando",0,null))
})

//endpoint
//rota para a consulta completa
app.get('/tasks',(req,res)=>{
    connection.query('SELECT * FROM tasks',(err,rows)=>{
        if(!err){
            res.json(functions.response('Sucesso',
                 'Sucesso na consulta',rows.length,rows))
        }else{
            res.json(functions.response('erro',err.message,0,null))
        }
    })
})


//rota para fazer uma consulta de task por id
app.get('/tasks/:id',(req,res)=>{
    const id =req.params.id;
    connection.query('SELECT * FROM tasks WHERE id = ?',[id],(err,rows)=>{
        if(!err){
            if(rows.length>0){
                res.json(functions.response('Sucesso','Sucesso na pesquisa',rows.length,rows))
            }else{
                res.json(functions.response('Atenção','Não foi encontrada a task selecionada',0,null))
            }   
        }else{
            res.json(functions.response('erro',err.message,0,null))
        }
    })
})

//rota para atualizar o status da task pelo id selecionado
app.put('/tasks/:id/status/:status',(req,res)=>{
    const id = req.params.id;
    const status = req.params.status;
    //[status, id] - status vem antes pra respeitar a sequencia que o SQL lê
    connection.query('UPDATE tasks SET status =? WHERE id = ?',[status,id],(err,rows)=>{
        if(!err){
            if(rows.affectedRows>0){
                res.json(functions.response('Sucesso','Sucesso na alteração do status',rows.affectedRows,null))
            }else{
                res.json(functions.response('Alerta vermelho','Task não encontradad',0,null))
            }
        }else{
            res.json(functions.response('Erro',err.message,0,null))
        }
    })
})

//rota pra excluir uma task
//método delete

app.delete('/tasks/:id/delete', (req,res) => {
    const id = req.params.id;
    //rows - retorno dos não erros
    connection.query('DELETE from tasks WHERE id = ?', [id], (err,rows) => {
        //pode nao ter erro de conexão, mas ver se tem o id desejado
        if(!err){
            //testar se tem o id no banco
            if(rows.affectedRows>0){
                res.json(functions.response('Sucesso', 'Task Deletada', rows.affectedRows, null));
            }else{
                res.json(functions.response('Atenção', 'Task não encontrada',0, null));
            }
        }else{
            res.json(functions.response('Erro', err.message, 0, null));
        }
    })
})

//endpoint para inserir uma nova task
app.post('/tasks/create', (req,res) => {
    //como a task é um texto e o status também
    //através da rota adicionar midleware isso
    //código que se carrega antes da rota - middleware
    const post_data = req.body;

    //se estiver indefinido na açao foi nada passado no objeto, json vazio, requisição sem parametros
    if(post_data == undefined){
        res.json(functions.response('Atenção', 'sem dados de uma nova task', 0, null));
        return
    }

    //checar se os dados informados são inválidos

    //no parametro task é indefinido ou status é indefinido - se tem informação em um dos dois
    if(post_data.task == undefined || post_data.status == undefined){
        res.json(functions.response('Atenção', 'dados inválidos', 0, null));
        return    
    }
    
    //pegar os dados da task
    const task = post_data.task;
    const status = post_data.status;

    //inserir a task
    connection.query('INSERT INTO tasks (task,status,created_at,updated_at) VALUES (?,?,NOW(),NOW())',[task,status],(err,rows) => {
        if(!err){
            res.json(functions.response('Sucesso', 'Task cadastrada com sucesso!', rows.affectedRows, null));
        }else{
            res.json(functions.response('Erro', err.message, rows.affectedRows, null));
        }
    })
    
})

//criando o endpoint para atualizar o texto de uma task
//texto da task será enviado através do boy

app.put('/tasks/:id/update', (req,res) => {

    //pegando os dados da requisição
    const id = req.params.id;
    const post_data = req.body;

    //pegar os dados da task
    const task = post_data.task;
    const status = post_data.status;

    //checar se os dados estão vazios 
    if(post_data == undefined){
        res.json(functions.response('Atenção', 'Sem dados para atualizar a task', 0, null));
        return;
    }
    if(post_data.task == undefined || post_data.status == undefined){
        res.json(functions.response('Atenção', 'Dados Inválidos', 0, null));
        return;
    }

    connection.query('UPDATE tasks SET task =?, status =?, updated_at = NOW() WHERE id=?', [task,status,id], (err,rows) => {
        if(!err){
            if(rows.affectedRows>0){
                res.json(functions.response('Sucesso', 'Task atualizada com sucesso!', rows.affectedRows, null));
            }else{
                res.json(functions.response('Atenção', 'Task não foi encontrada', 0, null));
            }
        }else{
            res.json(functions.response('Erro', err.message, 0, null));
        }
    })

})


app.use((req,res)=>{
    res.json(functions.response('atenção',
                'Rota não encontrada',0,null))
})