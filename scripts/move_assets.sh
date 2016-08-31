#!/bin/bash

BASE_DIR=$PWD

assets=(foundation-sites/dist/foundation.min.css foundation-sites/dist/foundation.min.js)

for i in ${assets[@]}; do
  cp $BASE_DIR/node_modules/${i} $BASE_DIR/public/assets/
done
