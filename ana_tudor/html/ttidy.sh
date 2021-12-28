#!/usr/bin/env bash

#find . -name '*.html' -type f -print -exec tidy -mq '{}' \;

#find . -name '04.html' -type f -print -exec tidy -mq '{}' \;

find . -name 'grr.html' -type f -print -exec tidy --drop-empty-elements no -mq '{}' \;

#tidy --drop-empty-elements no index.html > two.html
