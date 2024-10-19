
# Task Node .. 

This server-side application serves as the backend for managing Animes webtooons data. It provides endpoints to add, view and Delete operations on submission webtoons.



## Technologies Used

 * Mongoose.js

 * Express.js

 * Node.js

 * npm (Node Package Manager)


## Prerequisites

 * Node.js

 * npm (Node Package Manager)

## Getting Started

To get the project up and running, follow these steps:


1. Clone the Repository:

```bash
  git clone https://github.com/PRITISH-TOMAR/WebtoonNode
  cd TaskNode
```
2. Install dependencies:
```bash
 npm install
```
3. Run the server:
```bash
 npm start
```



...........................................................




#### POST / 

Anime in the Database

Parameters
* title 
* characters 
* description


* Request Body
```bash
{
 "title" : "ANime_name",
 "description": "ALl about the Anime",
 "characters": {
    "Naruto": true,
    "Sasuke": true,
    "Sakura": true
  }  
}

```
* Response Body
```bash
{
    "success": true,
    "data": []
}

```

..................................................................................................................................................

#### GET / 
Returns all Anime's data

* Response Body
```bash
{
    "success": true,
    "data": [
        {
            "_id": "6706417cd28943e1a1da60dd",
            "title": "ANime_name",
            "description": "ALl about the Anime",
            "characters": {
                "Naruto": true,
                "Sasuke": true,
                "Sakura": true
            }
        }
    ]
}
```




#### GET/ :id
Get details by Id
* Response Body
```bash
{
    "success": true,
    "data": {
        "_id": "6706417cd28943e1a1da60dd",
        "title": "ANime_name",
        "description": "ALl about the Anime",
        "characters": {
            "Naruto": true,
            "Sasuke": true,
            "Sakura": true
        },
        "coverImage": "./public/images/avatar.png",
        "createdAt": "2024-10-09T08:40:28.935Z",
        "updatedAt": "2024-10-09T08:40:28.935Z",
        "__v": 0
    }
}
```

..................................................................................................................................................

#### DELETE / :id

Delete Anime by Id

* Response Body
```bash
{
    "success": true,
    "message": "Webtoon deleted successfully"
}
```









* All the links you can be tested on localhost!

 
*  Error Handling : 
   Errors are returned with appropriate HTTP status codes and messages.
