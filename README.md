Cookies @ Project Success
=========================

This is a web server program to demo how cookies work.

The website lets you post messages after logging in.

It's also a Capture the Flag game!

The Game
--------
Try to post a message as someone else.  Write your name as the message, but 
send it so that it appears someone else sent the message.

There are at least 3 ways to capture this flag:

1. Guess the other person's password.  Don't make this easy for anyone else
    when you make your own password; avoid [the 10,000 most common passwords.][10k]
2. Guess the mistake that I made when running this code on my server, then exploit it.
3. Find the bug!  Something's wrong with this code; no guessing required.


Run the server
--------------

This server is open-source, so you can read its code (you already found this document).

To run this code:

1. [install the programming language NodeJS][install-nodejs]
2. install this code's dependencies
```bash
# npm is a program that handles Node.js libraries
npm install
```
3. ???
4. run the server
```bash
# npm can also run nodejs programs, like this web server
npm start
```

That 3rd step is important; be sure to read the error message that happens if you skip it.


[10k]: https://en.wikipedia.org/wiki/Wikipedia:10,000_most_common_passwords "Wikipedia: the 10,000 most common passwords"
[install-nodejs]: https://nodejs.dev/learn/how-to-install-nodejs "How to install Node.js"
