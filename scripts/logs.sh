#!/usr/bin/env bash

source scripts/env_config.sh


ssh 57399fda0c1e66013700000b@shop-venkatvp.rhcloud.com "tail -f ./app-root/data/apache-tomcat-8.0/logs/catalina.out                                         "