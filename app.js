const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res) => {

    res.send("Hello gvdgvd");
})

app.listen(port,()=>{

    debug("port " + chalk.red(" : " + port));
})