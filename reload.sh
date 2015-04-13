#!/bin/bash

# still under development
cd /opt/services/api
docker stop api
docker rm api
docker build -t api .
#docker run -d -e 'environment.name=dev' -v '/etc/e2e:/etc/e2e' -v '/opt/data/pictures:/opt/data/pictures' -v '/opt/data/thumbs:/opt/data/thumbs' -v '/var/log/api:/var/log/api' --name="api" -p 8280:8080 -p 9990:9990 -p 1898:1898 -p 62911:62911 api
