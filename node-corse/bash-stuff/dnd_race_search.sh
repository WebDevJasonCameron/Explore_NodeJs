#!/bin/bash

echo "Welcome to the D&D Race Search Tool!"
echo "------------------------------------"
echo

read -p "Enter the name of a D&D race: " race_name

curl -L "https://www.dnd5eapi.co/api/races/$race_nam" -H 'Accept: application/json'
