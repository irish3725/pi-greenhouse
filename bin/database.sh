#!/bin/bash

COMMAND=$1

BINDIR=`dirname "$0"`
SQLPATH="$BINDIR/../sql"
CONTAINERNAME="pi-greenhouse"
PWD="docker"
USER="postgres"
DATABASE="postgres"
CREATESCRIPT="$SQLPATH/createScript.sql"
SIMULATESCRIPT="$SQLPATH/addRow.sql"

#printf "$BINDIR\n$SQLPATH\n$CREATESCRIPT\n$SIMULATESCRIPT\n"
#exit 1

## creates database container
start_container() {
    docker run --rm --name $CONTAINERNAME -e POSTGRES_PASSWORD=$PWD -d -p 5432:5432 -v $HOME/pi-greenhouse/.database/:/var/lib/postgres/data/ $USER
}

## creates table and users
init_database() {
    psql -h localhost -U $USER -d $DATABASE -q -f $CREATESCRIPT
}

## adds rows to initialized database
simulate() {
    [[ -z "$1" ]] && rows=10 || rows=$1
    printf "adding $rows rows\n"
    for (( i = 0; i < $rows; i++ )); do
      psql -h localhost -U $USER -d $DATABASE -q -f $SIMULATESCRIPT
    done
}

## kills container
kill_container() {
    printf "killing container "
    docker kill $CONTAINERNAME
}

## selects all rows form pi_greenhouse_statistics
sel() {
    psql -h localhost -U $USER -d $DATABASE -c "SELECT * FROM pi_greenhouse_statistics"
    exit 1
}

print_help() {
    printf "\'$1\' is not a valid option. Valid options:\n  \'\'\t\t\tstarts database container, creates table and users, adds rows for number in first parameter (or 10 if no first parameter)\n  start\t\t\tstarts database container, creates tables and users\n  simulate or sim\tadds rows for number in first parameter (or 10 if no first parameter)\n  select or sel\t\tdisplays current containts of pi_greenhouse_stastics\n  stop\t\t\tkills container\n"
    exit 1
}

INTRE='^[0-9]+$'
## blank command creates container, creates table and users, adds $2 (or 20) rows
if [[ -z $COMMAND ]] || [[ $COMMAND =~ $INTRE ]]
then
    printf "creating container with ID: "
    # start container
    start_container
    sleep 2
    # create table and users
    init_database
    # simulate rows
    simulate $COMMAND
## start creates container, creates table and users
elif [[ $COMMAND == "start" ]]
then
    printf "creating container with ID: "
    # start container
    start_container
    sleep 2
    # create table and users
    init_database
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

