let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg=require('pg');

const PORT=3000;

let pool = new pg.Pool({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "Percy394/*",
    database: "transaction",
    max:10
});

pool.connect((err, db, done) => {
    if(err){
        return console.log(err);
    }
    else{
        //var id = '';

        db.query('SELECT * FROM transaction',(err,table) =>{
            if(err){
                return console.log(err)
            }
            else{
                console.log(table)
            }
        })
    }
})

let app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(function(request,response,next){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type,Accept");
    next();
})

app.listen(PORT,()=>console.log('Listening on PORT '+PORT));
const {Client} = require('pg')
const { password, database, host, user } = require('pg/lib/defaults')