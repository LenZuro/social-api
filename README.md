# social-api
week 18 challenge 
 ## My task

 My Task was to create a social media Api that works ! It has been done, though i did not like the thoughs name i changed it to statment as I think a statment was a better way to go about it ! I first started by creating the config and models for the routes and what ws going to happen. after that i moved onto the contollers that gave me some trouble but thankfully I was able to move through them and start to build out routes! then i added some simple seeds to get started. I ran into some issues with mongo not being fully set up thankfull a TA helped me work through that issue ! and now I am happy to present NotBook (trademark pending). 

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```