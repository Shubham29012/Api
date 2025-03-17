// controllers/eventController.js
const { connectToDatabase } = require('../config/db');
const { ObjectId } = require('mongodb');

// GET event by ID
const getEventById = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const eventId = req.query.id;
    const event = await db.collection('events').findOne({ _id: new ObjectId(eventId) });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET latest events
const getLatestEvents = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const limit = parseInt(req.query.limit) || 5;
    const page = parseInt(req.query.page) || 1;
    const events = await db.collection('events')
      .find({ type: 'latest' })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new event
const createEvent = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const event = {
      type: 'event',
      uid: 18, // Default user ID
      name: req.body.name,
      tagline: req.body.tagline,
      schedule: new Date(req.body.schedule),
      description: req.body.description,
      files: { image: req.file.path }, // Store the file path
      moderator: req.body.moderator,
      category: req.body.category,
      sub_category: req.body.sub_category,
      rigor_rank: req.body.rigor_rank,
      attendees: []
    };
    const result = await db.collection('events').insertOne(event);
    res.status(201).json({ id: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT update an event
const updateEvent = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const eventId = req.params.id;
    const updateData = {
      name: req.body.name,
      tagline: req.body.tagline,
      schedule: new Date(req.body.schedule),
      description: req.body.description,
      files: { image: req.file.path }, // Update the file path
      moderator: req.body.moderator,
      category: req.body.category,
      sub_category: req.body.sub_category,
      rigor_rank: req.body.rigor_rank
    };
    const result = await db.collection('events').updateOne(
      { _id: new ObjectId(eventId) },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE an event
const deleteEvent = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const eventId = req.params.id;
    const result = await db.collection('events').deleteOne({ _id: new ObjectId(eventId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEvent,
  deleteEvent
};