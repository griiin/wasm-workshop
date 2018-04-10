#!/bin/bash

rustc +nightly --target wasm32-unknown-unknown -O src/*.rs
mv *.wasm dist/.
cp -rf src/*.js dist/.