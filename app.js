const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const res = require("express/lib/response");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send(
        {
            message: "Подключение успешно"
        }
    );
})



app.post('/login', (req, res)=>{
    const user ={
        login: 'admin',
        password: '1'
    }

    if(req.body.login !== user.login) res.status(404).send({message: 'Пользователь не найден'});

    if(req.body.login === user.login && req.body.password !== user.password) res.status(403).send({message: 'Неверный пароль'});

    if(req.body.login === user.login && req.body.password === user.password) res.send({message: 'Успешная авторизация'});

    console.log(req.body);
})


app.listen(3001,()=>{
    console.log("Сервер запущен. Порт: 3001");
})