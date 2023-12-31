#!/bin/bash

# Set the main directory
main_dir="."

# Create subfolders for src and test
mkdir -p "./src"
mkdir -p "./test"

# Loop through days 01 to 25 (Advent of Code)
for day in {01..25}; do
    # Create a folder for the day
    day_folder="${day}_Day"
    base_src="${main_dir}/src/${day_folder}";
    base_test="${main_dir}/test/${day_folder}";

    mkdir -p "${base_src}"
    mkdir -p "${base_test}"

    # Create input and solutions folders
    mkdir -p "${base_src}/input_A"
    mkdir -p "${base_src}/input_B"
    # Create sample input files
    touch "${base_src}/input_A/example.txt"
    touch "${base_src}/input_A/input.txt"
    
    touch "${base_src}/input_B/example.txt"
    touch "${base_src}/input_B/input.txt"

    mkdir -p "${base_src}/solutions"
    # Create sample solution files
    touch "${base_src}/solutions/problemA.js"
    touch "${base_src}/solutions/problemB.js"

    # Create test files
    mkdir -p "${base_test}/solutions"
    # Create sample solution files
    touch "${base_test}/solutions/problemA_Test.js"
    touch "${base_test}/solutions/problemB_Test.js"

done

echo "Folder structure created for Advent of Code 2023!"
