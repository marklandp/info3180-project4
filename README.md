My Wishlist System
===================
620011825
============


-------------

instructions
-------------
1. install virtualenv 
2. sudo apt-get install libpq-dev python-dev
3. install requirements.txt
4. create proj3 database and set postgres user password to postgres/ configure your own database settings
5. run db migrate -> upgrade
6. register first user and use the system

Features implemented
--------------------

1. all routes properly named and functioning according to API documentation, I dont return any json data though, just the views
2. Facebook,email sharing of user's wishlist
3. User cannot add same item/url again
4. most flashed error messages, will present a dismissable flash message
5. all forms have form validation, passwords are hashed
6. user can delete a wish
7. each wish thumbnail is clickable and routes to the original url of the item in the wishlist
