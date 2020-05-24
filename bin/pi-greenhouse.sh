#!/bin/bash

COMMAND=$1

BINDIR=`dirname "$0"`
DBINITSCRIPT="$BINDIR/database.sh"

## start api in the background
cd $BINDIR/../api/ && npm start &

## start front-end
cd $BINDIR/../ && npm start

