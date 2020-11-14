'use strict';

const request= require('sync-request');

const WEBHOOK_URL= process.env.WEBHOOK_URL;

module.exports.star_added=(event,context,callback)=>{
const body = JSON.parse(event.body)

console.log({body});
const { repository,sender}= body;

const repo= repository.name;

const stars=repository.stargazers_count;


}

