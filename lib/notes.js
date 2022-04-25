const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    console.log(body)
    console.log(notesArray)
    const note = body;
    notesArray.notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesArray, null, 2)
    );
    return note; 
}


module.exports = {
  createNewNote
};