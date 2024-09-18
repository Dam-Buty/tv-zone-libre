#!/bin/bash

# Check if the path is provided as argument
if [ -z "$1" ]; then
  echo "Usage: $0 <path>"
  exit 1
fi

# Check if the provided path exists
if [ ! -d "$1" ]; then
  echo "Error: Directory $1 does not exist."
  exit 1
fi

# Loop over all JSON files in the path
for FILE in "$1"/*.json; do
  # Skip if there are no JSON files
  [ -e "$FILE" ] || continue

  # Extract fields using jq and output in JSONL format
  jq -c '{ title: .title, duration: .duration, url: .sources[0].url }' "$FILE"
done
