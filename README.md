##  Deep Thoughts 

Deep Thoughts, where users can create an account, post their thoughts for others to see, and interact with other users through these thoughts

### Goal of the deep thoughts App:

The ultimate goal of our application is to make a social media app with the following features:

* A user can sign up and log in to the application.
* A user can post their thoughts and view other user's thoughts.
* A user can react, or reply, to a thought.
* A user can befriend other users.

###  Brief: 
Modern social media applications work with tons of data, most of the time on a single page. Since a lot of this data doesn't come from a single resource or endpoint, performing CRUD operations through an API built with RESTful design patterns involves hundreds, if not thousands, of HTTP requests from the client to the server in a short amount of time.

While this is a lighter version of the social media applications we've become accustomed to over the years, a lot of the same principles are in play here. When working with this much data on the front end of the application, a modern state-driven library such as React is a natural fit. After all, this is exactly why Facebook invented React in the first place.

When the REST API design pattern emerged, developers quickly adopted it because of its easy-to-understand and predictable nature. Most applications at the time didn't have so many features and demands for a dynamic interface in the same way today's applications do, so the HTTP requests between client and server were more sparse and less taxing on the user's connection.

With REST APIs, we implement CRUD actions through the HTTP verbs GET, POST, PUT, and DELETE. With GraphQL, however, we split these four actions into the following two categories:
* Queries: Queries are how we perform GET requests and ask for data from a GraphQL API.
* Mutations: Mutations are how we perform POST, PUT, and DELETE requests to create or manipulate data through a GraphQL API.
<img width="1399" alt="deepthoughts layout" src="https://github.com/Pizzan8t0r/deep-thoughts/assets/131811220/168ba5e1-4f86-45b8-9d3f-c50bf0307df1">

###  GraphQL: 
GraphQL, is used as an alternative to RESTful API design patterns:
A number of years ago, Facebook realized that it didn't matter how good their servers were at processing and handling data requests. If the people using their app didn't have a great network connection, like in an area with limited mobile data service, a lot of their data would never make it to the end user. Since they can't control the network their users make requests from, they came up with a new query language specification called GraphQL.

With GraphQL, we essentially set up a single API endpoint where we can retrieve as much or as little data as we need from multiple resources such as databases, microservices, or even other third-party APIs, all in a single HTTP request. We connect our Apollo server to our Express.js server. This will create a special /graphql endpoint for the Express.js server that will serve as the main endpoint for accessing the entire API. Creating a GraphQL API isn't much different than building a REST API with Express.js routes and controllers. Instead of creating a bunch of endpoints to handle all of the different types of requests, we consolidate them into one endpoint and provide more detailed information as to what the API is going to do for us. We need to work with two servers while we're in development. We'll run a back-end server to host our database and API, and we need a separate server for React development.
GraphQL isn't tied to a specific language. Instead, it is its own language specification that we can integrate into the language of our choosing

When this new wave of modern applications with dynamic data updating and retrieval emerged, sticking to the ideal RESTful API structure became increasingly cumbersome to work with for a number of reasons. The main reason is that RESTful API endpoints serve either too much or too little data. Because these endpoints may serve too little data, multiple requests would have to be made one after another to retrieve all of that data.

Creating a GraphQL API isn't much different than building a REST API with Express.js routes and controllers. Instead of creating a bunch of endpoints to handle all of the different types of requests, we consolidate them into one endpoint and provide more detailed information as to what the API is going to do for us.
![Screenshot 2023-05-29 at 18 26 35 (2)](https://github.com/Pizzan8t0r/deep-thoughts/assets/131811220/95aad7b6-43aa-418e-b0b8-b27cd53e5106)

##  
We integrated a Node.js-specific GraphQL library called Apollo Server to query all of data from our database using a single API endpoint. This allows us to query multiple resources of data with a single HTTP request and test our API using a built-in tool called Apollo Studio Explorer

* Integrated the Apollo Server GraphQL library to handle data requests to our API.
* Built both query type definitions and resolvers for retrieving data from our MongoDB database.
* Used the Apollo Studio Explorer interface to thoroughly test our GraphQL queries.
#### Deployment: 

