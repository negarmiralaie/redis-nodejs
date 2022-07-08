# redis-nodejs
# Redis : in-memory data structure store used ad a database caceh.
## What is in-memory? 
### Primarily databases have persistant data, if the machine that is running dataabase goes down, if it gets backed up, our data is not lost. Bc it stored our data in our disk. But in memory means that it stored our data in memory so if the machine goes down, the data in it is completely lost -> so we do not want to store our data in an in-memory database.

## So why would we want to store our data in an in-memory database?
### CAHING OUR DATA!

## What is caching data?
### First lets discuss what is "full body scanning". When we for exmaple want an item from our database which has the id of "8", we must go through every single item in our database to find the one which matches our desired condition (id of "8") is called full body scanning. Full body scans can get very eexpensive like imagine facebook database which has a heavy database. So one solution tp this problem is called indexing. A better solution is caching your data in an in-memory store.

### Now imagine we are using Redis as an in-memroy store. It is a key value store. So here we are going to Redis and searching for an item with the id of "8". This way we do not need to talk to our database and we simply get what we want from Redis. This is so much faster. This time we want an item with the id of 10. WE search for it in Redis and we can not find it. So we have to go to our database to find our desired item. Now we should at first store this item in Redis. Meaning The fist time we search for the data in Redis but it does not exist in Redis so we search for it in the database -> get the data -> store it in Redis -> use the data -> Next time we search for the data in redis, it does exist there -> it is a bit time consuming for the first time but after we saved the data in redis, it becomes efficient.