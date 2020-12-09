# Petful Server

- [Live App](https://petful-client-template-pearl.vercel.app/)

- [Client Side Repo](https://github.com/eriyanto87/petful-client)

## Built With

- Node
- Express

## API Documentation

[BASE URL](https://sleepy-harbor-21485.herokuapp.com)

GET /api/dog

- Provides array of all dog objects

Example request/response:

```
GET https://sleepy-harbor-21485.herokuapp.com/api/dog

HTTP STATUS 200 OK

[
    {
"imageURL": "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
"imageDescription": "A smiling golden-brown golden retreiver listening to music.",
"name": "Zeus",
"sex": "Male",
"age": 3,
"breed": "Golden Retriever",
"story": "Owner Passed away"
},
...
]
```

Get /api/cat

- Provides array of all cat objects

Example request/response:

```
GET https://sleepy-harbor-21485.herokuapp.com/api/cat

HTTP STATUS 200 OK

[
    {
"imageURL": "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
"imageDescription": "Orange bengal cat with black stripes lounging on concrete.",
"name": "Fluffy",
"sex": "Female",
"age": 2,
"breed": "Bengal",
"story": "Thrown on the street"
},...
]

```

GET /api/people

- Provides an array of all people

Example request/response:

```
GET https://sleepy-harbor-21485.herokuapp.com/api/people

HTTP STATUS 200 OK

[
"Randy Lahey",
"Trevor Cory",
"Jim Lahey"
]

```

POST /api/people

- Creates a new person at the bottom of the list. Requires a request body

Example request/response:

```

POST https://sleepy-harbor-21485.herokuapp.com/api/people
REQ BODY: {
    "name": "evi",
}

Response:
[
"Randy Lahey",
"Trevor Cory",
"Jim Lahey",
"Evi"
]

```

DELETE /api/people

- Delete person on the top of the line

Example Request/Response

```
DELETE https://sleepy-harbor-21485.herokuapp.com/api/people


Response:
[
"Trevor Cory",
"Jim Lahey",
"Evi"
]

```

DELETE /api/dog

- DELETE dog at the top of the line

EXAMPLE request/response:

```
DELETE https://sleepy-harbor-21485.herokuapp.com/api/dog

[
{
"age": 3,
"breed": "Golden Retriever",
"description": "A smiling golden-brown golden retreiver listening to music.",
"gender": "Male",
"imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"name": "Zim",
"story": "Owner Passed away"
},
]
```

DELETE /api/cat

- DELETE cat at the top of the line

EXAMPLE request/response:

```
DELETE https://sleepy-harbor-21485.herokuapp.com/api/cat

[
{
"age": 2,
"breed": "Bengal",
"description": "Orange bengal cat with black stripes lounging on concrete.",
"gender": "Female",
"imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
"name": "Steve French",
"story": "Thrown on the street"
},
]
```
