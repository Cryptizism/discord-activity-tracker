const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/activities.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {console.error(err.message); }
    console.log('Connected to the chinook database.');
});

module.exports = {
    create: function(guildId, params){
        db.run(`CREATE TABLE IF NOT EXISTS ${guildId}(timeUnixEpoch PRIMARY KEY, ${params.toString})`, (err) => {
            if (err) {console.error(err.message); }
            console.log(`Table ${guildId} created successfully.`);
        });
    },
    close: function(){
        db.close((err) => {
            if (err) {console.error(err.message); }
            console.log('Close the database connection.');
        });
    },
    insert: function(guildId, params, data){
        db.run(`INSERT INTO ${guildId}(${params.toString}) VALUES(${data.toString})`, (err) => {
            if (err) {console.error(err.message); }
            console.log(`Row inserted successfully.`);
        });
    }
} 
