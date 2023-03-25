# Developing APIs with node.js and next.js

An Application Programming Interface (API) is a way for two or more computer programs to communicate with each other. The most popular API among developer is REpresentational State Transfer (REST) API which sometimes may be refered to as RESTful API (like restful: "Something that is restful helps you to feel calm and relaxed."). A REST API is an API that uses HTTP requests to access and manipulate data. 

<b>HTTP Message Format:</b>

<i><b>Request Message</b></i> (Request Line=Method<sup>1</sup>, Request-URI, HTTP-Version, Headers<sup>3</sup>, Body<sup>5</sup>) </br><b>+</b></br> <i><b>Response Message</b></i> (Status<sup>2</sup> Line=HTTP-Version, Status-Code<sup>4</sup>, Reason-Phrase, Headers<sup>3</sup>, Body<sup>5</sup>)


<sup>1</sup> Method tells the server what to do <sup>2</sup> Status tells client what happened <sup>3</sup> Additional information to request/response <sup>4</sup> Code Category: Informational (100-101), Successful (200-206), Redirection (300-305), Client Error (400-415), Server Error (500-505) <sup>5</sup> Contains request/response data


## Fake REST API with `JSON Server`

You can make one by running:

🕹 npm install -g json-server

📄 create a db.json file including 

`{`

`"dataSetOne": [ {"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}],`

`"dataSetTwo": [ {"id": 1, "name": "Anne"}, {"id": 2, "name": "Jack"}]`

`}`

🕹 For running it: npx json-server db.json --port 3001

your data can be reached at http://localhost:3001/dataSetOne or http://localhost:3001/dataSetTwo

## Making REST API using express.js
Well, I developed a simple one which you can find in node-next-restful folder.

## GraphQL

REST APIs have a problem commonly known as over-fetching, as the name suggests, when you query something, it returns more than what you need; `GraphQL` which is a query language for APIs, is a way we can avoid this problem; it lets us query exactly what we want, when we want.

Mainly there are two ways to write a GraphQL server, meaning writing a schema, which defines all the types and fields, and the resolvers, which are the collection of functions that are called to return the data for those types: Code-first and schema-First methods. I’m not going to explain which is better for what work or talking about them, there are plenty of articles explaining each better than I ever could. Here, I used both methods to write a simple server. For schema-first method, I managed to connect my server to the MongoDB database and i implement an authentication system.

# How to use
```diff
+ Download / Clone Project
+ 🕹 cd to the project folders
+ 🕹 Run: npm i
+ 🕹 Run: npm run dev
+ voilà 🤌🏼
```

Enjoy 🚀
