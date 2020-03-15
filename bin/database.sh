#!/bin/bash

COMMAND=$1

BINDIR=`dirname "$0"`
SQLPATH="$BINDIR/../greenhouse/sql"
IMAGENAME="greenhouse_statistics"
CONTAINERNAME="greenhouse_statistics"
PWD="adansonii"
USER="monstera"
DATABASE="postgres"
VOLUMENAME="greenhouse_statistics"
VOLUMELOCATION="/var/lib/docker/volumes/greenhouse_statistics/_data"
VOLUMEDESTINATION="/var/lib/postgresql/data"
CREATESCRIPT="$SQLPATH/createScript.sql"
SIMULATESCRIPT="$SQLPATH/addRow.sql"

#printf "$BINDIR\n$SQLPATH\n$CREATESCRIPT\n$SIMULATESCRIPT\n"
#exit 1

## creates database image using Dockerfile in pi-greenhouse/greenhouse/
create_container() {
  docker build -t greenhouse_statistics $BINDIR/../greenhouse/
}

## starts database container
start_container() {
    docker run --rm --name $CONTAINERNAME -p 5432:5432 -v $VOLUMENAME:$VOLUMEDESTINATION -d $CONTAINERNAME
}

## adds rows to initialized database
simulate() {
    [[ -z "$1" ]] && rows=10 || rows=$1
    printf "adding $rows rows\n"
    for (( i = 0; i < $rows; i++ )); do
      PGPASSWORD=$PWD psql -h localhost -U $USER -d $DATABASE -q -f $SIMULATESCRIPT
    done
}

## kills container
kill_container() {
    printf "killing container "
    docker kill $CONTAINERNAME
}

## selects all rows form pi_greenhouse_statistics
sel() {
    PGPASSWORD=$PWD psql -h localhost -U $USER -d $DATABASE -c "SELECT * FROM pi_greenhouse_statistics"
    exit 1
}

## prints help message
print_help() {
    if ! [[ $COMMAND == "help" ]] 
    then
        printf "\'$COMMAND\' is not a valid option. "
    fi

    printf "Valid options:\n  \'\'\t\t\tstarts database container, creates table and users, adds rows for number in first parameter (or 10 if no first parameter)\n  start\t\t\tstarts database container, creates tables and users\n  simulate or sim\tadds rows for number in first parameter (or 10 if no first parameter)\n  select or sel\t\tdisplays current containts of pi_greenhouse_stastics\n  stop\t\t\tkills container\n  help\t\t\tprints this message\n"
    exit 1
}

INTRE='^[0-9]+$'
## blank command creates container, creates table and users, adds $2 (or 20) rows
if [[ -z $COMMAND ]] || [[ $COMMAND =~ $INTRE ]]
then
    printf "creating container with ID: "
    # create image
    create_container   
    # start container
    start_container
## start creates container, creates table and users
elif [[ $COMMAND == "start" ]]
then
    printf "creating container with ID: "
    # create image
    create_container   
    # start container
    start_container
## sim or simulate adds $2 (or 20) rows to table
elif [[ $COMMAND == "simulate" ]] || [[ $COMMAND == "sim" ]]
then
    simulate $2
## stop kills container
elif [[ $COMMAND == "stop" ]]
then
    kill_container
elif [[ $COMMAND == "select" ]] || [[ $COMMAND == "sel" ]]
then
    sel
## print help info if invalid option
else
    print_help
fi

echo "done."

