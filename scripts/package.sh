#!/bin/sh

rm -rf pkg

cp LICENSE pkg
cp README.md pkg
cp package.json pkg
cp -r dist/* pkg