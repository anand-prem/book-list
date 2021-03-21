### To run in local
Build the docker:
```shell
docker build .
```

Get the newly created docker image id:
```shell
docker images
```

Run the docker
```shell
docker run -p 8050:8050 <docker_image_id> 
```

Now access the web app from `localhost:8050`

---
Implementation as per the requirements:

### consuming APIs
Implemented a GET books endpoint with a BFF server counter-part.

### unit/integration testing
Sorry I couldn't focus on TDD/BDD/Integration tests as its taking some time to
configure the initial setup for UI testing. So I gave priority to do some MVP.

### observable
I couldn't find a proper place to use observable as this one is a small project and
if I used observables it might be some king of over-engineering.

### services
I have implemented service on both client side and server side as well.
### events
I couldn't find a proper place to use events. One place might be the logger that we can implement
some kind of event storming architecture using events.
### routing
Since it's a simple app I tried adding two sample routed that can be accessed from the side menu bar.
### components
Added different kinds of class and functional components.
### modules
Tried to implement separation of concerns using modular pattern.
### Docker
Added Dockerfile to containerize the application.
### State Management
Incorporated redux to have a centralized state store.
