// routes/eventRoutes.js
const express = require('express');
const multer = require('multer');
const eventController = require('../controllers/eventController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Store uploaded files in the 'uploads' folder

// GET event by ID
router.get('/events', eventController.getEventById);

// GET latest events
router.get('/events/latest', eventController.getLatestEvents);

// POST a new event
router.post('/events', upload.single('image'), eventController.createEvent);

// PUT update an event
router.put('/events/:id', upload.single('image'), eventController.updateEvent);

// DELETE an event
router.delete('/events/:id', eventController.deleteEvent);

module.exports = router;