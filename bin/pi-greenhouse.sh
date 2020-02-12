#!/bin/bash

COMMAND=$1

BINDIR=`dirname "$0"`
DBINITSCRIPT="$BINDIR/database.sh"

## initialize database
bash $DBINITSCRIPT 10

## start api in the background
cd $BINDIR/../api/ && npm start &

## start front-end
#cd $BINDIR/../ && npm start

