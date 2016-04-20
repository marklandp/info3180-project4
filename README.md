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
8. if user has no wishes a message is displayed and sharing is disabled/hidden. As soon as a wish is added, sharing is enabled
9. Logged user tries to access registration and login routes, they are redirected and a message is displayed. Admin can access registration page. Admin user has email "admin@wishlist.com"


Confirmed to work on these websites
-----------------------------------
1. Amazon
2. E-Bay
3. Tiger Direct
4. Lenovo
5. Only pulls the dell logo. Can't pull laptop thumbnail. Description, Title and URL pulled
6. Best Buy
7. May work on others, not tested