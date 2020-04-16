const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'https://clist.by/';

function sortByTime(dates) {
    dates.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
}

function scrapesite() {
    // setTimeout(() => {
    request(URL, (error, res, html) => {
        if (!error && res.statusCode == 200) {
            let $ = cheerio.load(html);
            let dates = [];
            let site = $('.coming').each((i, el) => {

                let site = $(el).find('.resource').text().trim();
                if (
                    site == 'codeforces.com' ||
                    site == 'atcoder.jp' ||
                    site == 'codechef.com'
                ) {
                    let item = $(el).find('.start-time').text().replace(/\s+/g, " ");
                    let item1 = $(el).find('.contest_title').text().replace(/\s+/g, " ");
                    let contestDate = "2020-" + item.substring(4, 6) + '-' + item.substring(1, 3) + ' ' +
                        item.substring(11, 16);
                    let id;
                    if (site == 'codeforces.com') id = 1;
                    else if (site == 'atcoder.jp') id = 2;
                    else if (site == 'codechef.com') id = 3;
                    dates.push(
                        {
                            id: id,
                            site: item1,
                            date: contestDate
                        }
                    );
                }
            });
            sortByTime(dates);
            dates = JSON.stringify(Object.assign({}, dates), null, 4);

            fs.writeFile('contests.json', dates, (err) => {
                if (err) throw err;
                else console.log('contests updated successfully');
            });
        }
    });
    //     scrapesite();
    // }, 2000);
}

scrapesite();