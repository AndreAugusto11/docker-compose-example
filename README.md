## Simple demonstrative app

- One Web Server (React)
- One Backend Server (NodeJs)
- One DB Service (MongoDB)
(Simulation of a name resolution service using `/etc/hosts`)<br></br>

## Notes

Even though the server and the web app are running inside containers, and in the same network, the requests are made from the host (in a browser) machine that cannot resolve the name of the containers. For this reason, in `webApp/src/App.js`, the path to the server needs to be `localhost` when running locally in our machine. In the case of a public deployment `backend` needs to be substituted with a domain name or an IP address of the corresponding backend server using some kind of name resolution service, which we will emulate.<br></br>


## How to run

### Locally

To provide name resolution, add the following line to the end of `/etc/hosts`:

`127.0.0.1 backend`

Run `docker-compose up` and open http://localhost:3000.<br></br>


### Using AWS-ECS

After downloading [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html), configure your credentials using:

`aws configure`

Create a new context (ECS context) with an arbitrary name and set it as the current one with:

`docker context create ecs <name-of-the-context>`

`docker context use <name-of-the-context>`

Run `docker compose up`, (not `docker-compose up`).

The web app will be available through its own IP and respective port (3000). In this case, to be able to make the requests, the browser needs to know how to access the backend. So we need to retrieve the IP address of the node running the web app backend and add to `/etc/hosts`:

`<IP-of-the-node> backend`

Notice that a loadbalancer is automatically created and that's where you can access the frontend on port 3000. Now that we `hardcoded` our name resolution service (adding to `/etc/hosts`), <br></br>

## Clean Up

To clean up, in both deployment methods, run `docker-compose down` or `docker compose down`, respectively.

If changed, set the docker context to the default:

`docker context use default`

Remove also the lines that were added to `/etc/hosts`.
