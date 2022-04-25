const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const notes = require('../../db/db');


router.get('/notes', (req, res) => {
    res.json(notes.notes)
})

router.post('/notes', (req, res) => {
    req.body.id = notes.notes.length;

    const note = createNewNote(req.body, notes);
    // //res.json(note);
})

module.exports = router;