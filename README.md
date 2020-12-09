# Petful Server

- [Live App](https://petful-client-template-pearl.vercel.app/)

- [Client Side Repo](https://github.com/eriyanto87/petful-client)

## Built With

- Node
- Express

## API Documentation

[BASE URL](https://sleepy-harbor-21485.herokuapp.com)

GET /api/dog
Provides array of all dog objects

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
