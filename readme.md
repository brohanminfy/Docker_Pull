# Node.js Docker Sample

This is a simple Node.js application bundled into a Docker image and hosted on Docker Hub.

##  Docker Image

Docker Hub: [samrathminfy/node-dock](https://hub.docker.com/r/samrathminfy/node-dock)

---

##  Pull the Docker Image

```bash
docker pull samrathminfy/node-dock:latest
```

---

##  Run the Container

```bash
docker run -p 3000:3000 samrathminfy/node-dock
```

> The app will be accessible at: [http://localhost:3000](http://localhost:3000)

---

##  Stop the Container

To stop the container, press `CTRL + C` or find the container ID using:

```bash
docker ps
```


To stop, we need to do:

```bash
docker stop <container_id>
```