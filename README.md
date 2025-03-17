Event Management API
This is a simple Event Management API built using Node.js, Express, and MongoDB.
It supports CRUD (Create, Read, Update, Delete) operations for managing events.
The API allows you to create events, retrieve event details, update events, and delete events.

Table of Contents
•	Installation
•	API Endpoints
o	Create Event
o	Get Event by ID
o	Get Latest Events
o	Update Event
o	Delete Event
•	Testing with Postman
•	Contributing
•	License
	Install dependencies:
bash
Copy
npm install
Create a .env file in the root directory and add your MongoDB connection string:
env
Copy
MONGODB_URI=mongodb://localhost:27017/eventdb
PORT=3000
4.	Start the server:
bash
Copy
node server.js
The server will start on http://localhost:3000.
API Endpoints
Create Event
•	Endpoint: POST /api/v3/app/events
•	Description: Create a new event.
•	Request Body:
o	name: Name of the event.
o	tagline: Tagline for the event.
o	schedule: Event schedule (e.g., 2023-12-15T10:00:00Z).
o	description: Event description.
o	moderator: Moderator name.
o	category: Event category.
o	sub_category: Sub-category.
o	rigor_rank: Rigor rank.
o	image: Image file (upload).
•	Response:
json
Copy
{
  "id": "64f1e2b3e4b0a1b2c3d4e5f6"
}
Get Event by ID
•	Endpoint: GET /api/v3/app/events?id=<event_id>
•	Description: Retrieve details of a specific event by its ID.
•	Query Parameter:
o	id: The ID of the event.
•	Response:
json
Copy
{
  "_id": "64f1e2b3e4b0a1b2c3d4e5f6",
  "type": "event",
  "uid": 18,
  "name": "Tech Conference 2023",
  "tagline": "Innovate and Inspire",
  "schedule": "2023-12-15T10:00:00.000Z",
  "description": "A conference for tech enthusiasts",
  "files": {
    "image": "uploads/xyz1234.jpg"
  },
  "moderator": "John Doe",
  "category": "Technology",
  "sub_category": "AI",
  "rigor_rank": 5,
  "attendees": []
}
Get Latest Events
•	Endpoint: GET /api/v3/app/events/latest?limit=5&page=1
•	Description: Retrieve a list of the latest events with pagination.
•	Query Parameters:
o	limit: Number of events to retrieve (default: 5).
o	page: Page number (default: 1).
•	Response:
json
Copy
[
  {
    "_id": "64f1e2b3e4b0a1b2c3d4e5f6",
    "type": "event",
    "uid": 18,
    "name": "Tech Conference 2023",
    "tagline": "Innovate and Inspire",
    "schedule": "2023-12-15T10:00:00.000Z",
    "description": "A conference for tech enthusiasts",
    "files": {
      "image": "uploads/xyz1234.jpg"
    },
    "moderator": "John Doe",
    "category": "Technology",
    "sub_category": "AI",
    "rigor_rank": 5,
    "attendees": []
  }
]
Update Event
•	Endpoint: PUT /api/v3/app/events/<event_id>
•	Description: Update an existing event by its ID.
•	Request Body:
o	name: Updated name.
o	tagline: Updated tagline.
o	schedule: Updated schedule.
o	description: Updated description.
o	moderator: Updated moderator.
o	category: Updated category.
o	sub_category: Updated sub-category.
o	rigor_rank: Updated rigor rank.
o	image: Updated image file (upload).
•	Response:
json
Copy
{
  "message": "Event updated successfully"
}
Delete Event
•	Endpoint: DELETE /api/v3/app/events/<event_id>
•	Description: Delete an event by its ID.
•	Response:
json
Copy
{
  "message": "Event deleted successfully"
}
Testing with Postman
1.	Create Event:
o	Method: POST
o	URL: http://localhost:3000/api/v3/app/events
o	Body: form-data with fields as described above.
2.	Get Event by ID:
o	Method: GET
o	URL: http://localhost:3000/api/v3/app/events?id=<event_id>
3.	Get Latest Events:
o	Method: GET
o	URL: http://localhost:3000/api/v3/app/events/latest?limit=5&page=1
4.	Update Event:
o	Method: PUT
o	URL: http://localhost:3000/api/v3/app/events/<event_id>
o	Body: form-data with fields as described above.
5.	Delete Event:
o	Method: DELETE
o	URL: http://localhost:3000/api/v3/app/events/<event_id>
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
License
This project is licensed under the MIT License. See the LICENSE file for details.


Update Event

Delete Event

Testing with Postman

Contributing

License

Installation
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/event-api.git
cd event-api
Install dependencies:

bash
Copy
npm install
Create a .env file in the root directory and add your MongoDB connection string:

env
Copy
MONGODB_URI=mongodb://localhost:27017/eventdb
PORT=3000
Start the server:

bash
Copy
node server.js
The server will start on http://localhost:3000.

API Endpoints
Create Event
Endpoint: POST /api/v3/app/events

Description: Create a new event.

Request Body:

name: Name of the event.

tagline: Tagline for the event.

schedule: Event schedule (e.g., 2023-12-15T10:00:00Z).

description: Event description.

moderator: Moderator name.

category: Event category.

sub_category: Sub-category.

rigor_rank: Rigor rank.

image: Image file (upload).

Response:

json
Copy
{
  "id": "64f1e2b3e4b0a1b2c3d4e5f6"
}
Get Event by ID
Endpoint: GET /api/v3/app/events?id=<event_id>

Description: Retrieve details of a specific event by its ID.

Query Parameter:

id: The ID of the event.

Response:

json
Copy
{
  "_id": "64f1e2b3e4b0a1b2c3d4e5f6",
  "type": "event",
  "uid": 18,
  "name": "Tech Conference 2023",
  "tagline": "Innovate and Inspire",
  "schedule": "2023-12-15T10:00:00.000Z",
  "description": "A conference for tech enthusiasts",
  "files": {
    "image": "uploads/xyz1234.jpg"
  },
  "moderator": "John Doe",
  "category": "Technology",
  "sub_category": "AI",
  "rigor_rank": 5,
  "attendees": []
}
Get Latest Events
Endpoint: GET /api/v3/app/events/latest?limit=5&page=1

Description: Retrieve a list of the latest events with pagination.

Query Parameters:

limit: Number of events to retrieve (default: 5).

page: Page number (default: 1).

Response:

json
Copy
[
  {
    "_id": "64f1e2b3e4b0a1b2c3d4e5f6",
    "type": "event",
    "uid": 18,
    "name": "Tech Conference 2023",
    "tagline": "Innovate and Inspire",
    "schedule": "2023-12-15T10:00:00.000Z",
    "description": "A conference for tech enthusiasts",
    "files": {
      "image": "uploads/xyz1234.jpg"
    },
    "moderator": "John Doe",
    "category": "Technology",
    "sub_category": "AI",
    "rigor_rank": 5,
    "attendees": []
  }
]
Update Event
Endpoint: PUT /api/v3/app/events/<event_id>

Description: Update an existing event by its ID.

Request Body:

name: Updated name.

tagline: Updated tagline.

schedule: Updated schedule.

description: Updated description.

moderator: Updated moderator.

category: Updated category.

sub_category: Updated sub-category.

rigor_rank: Updated rigor rank.

image: Updated image file (upload).

Response:

json
Copy
{
  "message": "Event updated successfully"
}
Delete Event
Endpoint: DELETE /api/v3/app/events/<event_id>

Description: Delete an event by its ID.

Response:

json
Copy
{
  "message": "Event deleted successfully"
}
Testing with Postman
Create Event:

Method: POST

URL: http://localhost:3000/api/v3/app/events

Body: form-data with fields as described above.

Get Event by ID:

Method: GET

URL: http://localhost:3000/api/v3/app/events?id=<event_id>

Get Latest Events:

Method: GET

URL: http://localhost:3000/api/v3/app/events/latest?limit=5&page=1

Update Event:

Method: PUT

URL: http://localhost:3000/api/v3/app/events/<event_id>

Body: form-data with fields as described above.

Delete Event:

Method: DELETE

URL: http://localhost:3000/api/v3/app/events/<event_id>



