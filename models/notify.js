const fs = require('fs');
const constests = require('../contests.json');

function fetchData() {
    let contest = constests;

    var timeTill = new Date(constests[0].date) - new Date();

    timeTill += 19800000;
    console.log(timeTill);

    delete contest[0];

    fs.writeFile('contests.json', contest, (err) => {
        if (err) throw err;
        else console.log('Updated contests successfully.');
    });

    if (timeTill < 0) {
        // Add notifier function.
        fetchData();
    }
    else {

        setTimeout(() => {
            // Add notifier function.

            fetchData();
        }, timeTill);
    };
}

fetchData();