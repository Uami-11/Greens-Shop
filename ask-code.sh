#!/bin/bash

# Default values
COPY=false
PROMPT=""
MODEL="qwen2.5-coder:7b-instruct"

# Parse arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
    -c) COPY=true ;;
    *) PROMPT="$1" ;;
    esac
    shift
done

if [ -z "$PROMPT" ]; then
    echo "Usage: ./ask-code.sh [-c] \"Your prompt here\""
    exit 1
fi

# Gather code, run model, and handle output
RESPONSE=$(git ls-files | grep -vE '(\.png|\.jpg|\.exe|lock|node_modules|dist|build)' |
    xargs -I {} sh -c 'echo "--- FILE: {} ---"; cat {}' |
    ollama run "$MODEL" "$PROMPT")

# Print to terminal
echo "$RESPONSE"

# Copy to clipboard if -c was used (supports X11/Arch)
if [ "$COPY" = true ]; then
    if command -v xclip >/dev/null; then
        echo "$RESPONSE" | xclip -selection clipboard
        echo -e "\n\033[0;32m[✓] Response copied to clipboard.\033[0m"
    else
        echo -e "\n\033[0;31m[!] xclip not found. Install it with: sudo pacman -S xclip\033[0m"
    fi
fi
