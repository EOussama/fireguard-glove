#!/bin/sh

rm -rf pkg
mkdir -p pkg/assets

cp LICENSE pkg
cp README.md pkg
cp package.json pkg

cp -r dist/* pkg
cp assets/firemitt.svg pkg/assets