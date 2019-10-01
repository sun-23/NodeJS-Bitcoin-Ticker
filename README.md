# NodeJS-Bitcoin-Ticker
NodeJS npm ExpressJS body-Parser request module 

1 install nodejs 
2 create folder Bitcoin-Ticker then put this 2 file to it 
3 command line cd Bitcoin-Ticker npm init then npm install express request nodemon body-parser
4 run with nodemon index.js or node index.js

/*-----------------*/
if it cannot install npm and error Unhandled rejection Error : EACCES : permission denined ...... or Other.
use this command  sudo npm cache clean --force --unsafe --perm 
then it will Ask the password 
Enter password 
see more https://npm.community/t/unhandled-rejection-error-eacces-permission-denied-angular-npm-install/4981

if port cannot use 
command lsof -i TCP:(port number) | grep LISTEN (example lsof -i TCP:3000 | grep LISTEN)
then it will show node 1111 ....  (this is example)
command kill -9 1111 (this is example)
see more https://www.murarinayak.com/blog/technology/how-to-resolve-eaddrinuse-address-already-in-use-error/
