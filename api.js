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

app.use((req,res)=>{
    res.json(functions.response('atenção',
                'Rota não encontrada',0,null))
})