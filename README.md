
# Node App on Docker

A complete auto build and deployment of Node App using Docker-Container


## Docker Commands (step by step)

softwareupdate --install-rosetta

docker run -it node /bin/bash

docker build -t basic-app .

docker build -t basic-app:v2 .
docker run --name basic-app-container-v2 -p 5500:5500


---------------------


docker run --name basic-app-container -p 5500:5500 --rm -v /Users/homesachin/Desktop/zoneone/basic-app:/app basic-app

---------------------


https://hub.docker.com/r/schnarordocker/node-app

docker pull schnarordocker/node-app


--------------------


create repo on docker as : node-app-test , with tag as: testing
docker buildx build --platform linux/amd64 -t schnarordocker/node-app-test:testing .
docker push schnarordocker/node-app-test


--------------------


on https://labs.play-with-docker.com/

docker pull schnarordocker/node-app-test
docker images
docker run -p 5500:5500 schnarordocker/node-app-test
and the...click on blue port number link 
