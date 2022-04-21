const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db');


router.get('/db', (req, res) => {
    res.json(notes)
// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
})

router.post('/db', (req, res) => {

    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

    // `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you)
})

module.exports = router;