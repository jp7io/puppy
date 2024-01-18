#!/bin/bash
# Usage: ./screenshot.sh url

if [ -z "$1" ]; then
  echo "Please provide the URL."
  exit 1
fi

echo "Taking the screenshot..."

URL=$1

cp loading.png screenshot.png

curl -s "http://localhost:3000/screenshot?url=$URL" -o screenshot.png
