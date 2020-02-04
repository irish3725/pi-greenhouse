#!/bin/bash

# get directories for naviagation
RUNDIR=$PWD
BINDIR="$RUNDIR/`dirname "$0"`"
# get absolute for root dir
cd "$BINDIR/.."
ROOTDIR=$PWD
BINDIR="$ROOTDIR/bin"
SRCDIR="$ROOTDIR/src"
OUTDIR="$ROOTDIR/out"

# will be space delimited list of cpp files
CPPFILES="" 

# create out/
if [[ ! -e $OUTDIR ]]; then
  mkdir $OUTDIR
fi

# move to source directory
cd $SRCDIR

# get names of each c++ file
for file in *.cpp; do
  CPPFILES="$CPPFILES $file"
done

g++ -W -Wall -pedantic -o ${OUTDIR}/automation ${CPPFILES}

cd $RUNDIR

exec $OUTDIR/automation

# build and run file

