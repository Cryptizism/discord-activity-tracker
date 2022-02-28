// Require packages
const sqlite3 = require('sqlite3').verbose();

// Declare Database for later use and give read, write permissions
var db = new sqlite3.Database('./db/activities.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {console.error(err.message); }
    console.log('Connected to the activities database.');
});

// Functions that can be used out with the file
module.exports = {
    // Creates Table in the Database
    create: function(guildId, params){
        db.run(`CREATE TABLE IF NOT EXISTS ${guildId}(timeUnixEpoch PRIMARY KEY, ${data.join(', ')})`, (err) => {
            if (err) {console.error(`Error whilst trying to create table: \n ${err.message}`); }
            console.log(`Table ${guildId} created successfully.`);
        });
    },
    //Closes the connection with the database
    close: function(){
        db.close((err) => {
            if (err) { console.error(`Error whilst trying to close table: \n ${err.message}`); }
            console.log('Close the database connection.');
        });
    },
    //Inserts values into the database
    insert: function(guildId, params, data){
        //Gets unix epoch
        var unixEpoch = Date.now();
        //note to self: add unixepoch to VALUES to remove replicated code
        db.run(`INSERT INTO ${guildId}(${params.toString}) VALUES${data.join(', ')})`, (err) => {
            if (err) {
                console.error(`Error whilst trying to insert into table: \n ${err.message}`);
                try {
                    this.create(guildId, params); 
                } catch(err) {
                    console.error(`Attempt to create table failed, aborting INSERT. Critical Error.`)
                }
            }
            console.log(`Row inserted successfully.`);
        });
    }
} 
