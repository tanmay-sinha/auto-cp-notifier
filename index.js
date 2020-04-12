const request = require('request');
const cheerio = require('cheerio');

const URL = 'https://clist.by/';

request(URL, (error, response, html)=> {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
    }
});