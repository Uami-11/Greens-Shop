#!/bin/bash

# Ensure a prompt is provided
if [ -z "$1" ]; then
    echo "Usage: ./ask-code.sh \"Your prompt here\""
    exit 1
fi

PROMPT="$1"
MODEL="qwen2.5-coder:7b-instruct"

# 1. Get tracked files (excluding binaries and locks to save context space)
# 2. Format with headers
# 3. Pipe to Ollama with your custom prompt
git ls-files | grep -vE '(\.png|\.jpg|\.pdf|lock|node_modules)' |
    xargs -I {} sh -c 'echo "--- FILE: {} ---"; cat {}' |
    ollama run "$MODEL" "$PROMPT"
