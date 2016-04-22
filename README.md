My Wishlist System
===================
620011825
============


-------------

instructions
-------------
1. install virtualenv and activate environment
2. sudo apt-get install libpq-dev python-dev
3. install requirements.txt
4. create proj3 database and set postgres user password to postgres or configure your own database settings
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
9. Five star rating system implemented. Wishlist is sorted based on rating. Higher rated wishes at top of list
10. Logged user tries to access registration and login routes, they are redirected and a message is displayed. Admin can access registration page. Admin user has email "admin@wishlist.com"


Confirmed to work on these websites
-----------------------------------
1. Amazon
2. E-Bay
3. Tiger Direct
4. Lenovo
5. Only pulls the dell logo. Can't pull laptop thumbnail. Description, Title and URL pulled
6. Best Buy
7. Newegg
7. May work on others, not tested


Routes not in API documentation
-------------------------------
1. **"/api/wish/\<id\>/delete" METHOD=GET**  
      Used to delete a wish. Olny input is wish id.I know how this looks but it is secure. Login is required for the route and of the currently 
      logged in user does not match the user who created tthe wish then the user is redirected and a message
      flashed to tell the user not to use the website maliciously. Works great otherwise.
2. **"/api/wish/\<id\>/priority" METHODS=GET,POST**  
     Used to update the rating of a wish. takes wish id and updates record