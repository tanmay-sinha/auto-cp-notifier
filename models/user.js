const mysql = require('mysql');
const db = mysql.createConnection({
    // change accodingly
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contestDetails'
});

db.connect((error) => {
    if (error) {
        throw error;
    }
    else {
        console.log('Database Connected');
    }
});

function addData(a, b, c, email) {
    if (a == true) {
        let sql = `INSERT INTO \`1\`(\`1\`) VALUES ('${email}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            else console.log('added data for 1');
        });
    }
    if (b == true) {
        let sql = `INSERT INTO \`2\`(\`2\`) VALUES ('${email}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            else console.log('added data for 2');
        });
    }
    if (c == true) {
        let sql = `INSERT INTO \`3\`(\`3\`) VALUES ('${email}')`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            else console.log('added data for 3');
        });
    }
};

module.exports =
{
    addData: addData
}