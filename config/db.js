// config/db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

const connectToDatabase = async () => {
  if (!db) {
    try {
      await client.connect();
      db = client.db('eventdb'); // Use the database name from the connection string
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Failed to connect to MongoDB', error);
      throw error;
    }
  }
  return db;
};

module.exports = { connectToDatabase };