const fs = require('fs');
const contests = require('../contests.json');

function fetchData() {

    var timeTill = new Date(contests[0].date) - new Date();

    timeTill += 19800000;
    // console.log(timeTill);

    latestContest = contests[0];

    let contest = {};

    for (var i = 1; i < Object.keys(contests).length; i++) {
        contest[i - 1] = contests[i];

    }

    // console.log(contest);

    fs.writeFile('contests.json', contest, (err) => {
        if (err) throw err;
        else console.log('Updated contests successfully.');
    });

    if (timeTill <= 0) {
        // Add notifier function.
        fetchData();
    }
    else {

        // setTimeout(() => {
        // Add notifier function.

        //     fetchData();
        // }, timeTill);
    };
}

fetchData();