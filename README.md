## Simple demonstrative app

- One Nginx proxy
- One Web Server
- One Mongo DB service
- One Mongo Express service (To visualize the changes in Mongo DB)

## Notes

Even though the server and the web app are running inside containers, and the same notwork, the requests are made from the host (in a browser) machine that cannot resolve the name of the containers. For this reason, in `webApp/src/App.js`, the path to the server needs to be localhost when running in locally in our machine. In case of a deployment, `localhost` needs to be substituted with a domain name or an ip address of the corresponding server using some kind of name resolution service.

## How to run

`docker-compose up`

Open http://localhost:8080.