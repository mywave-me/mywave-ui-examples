#!/bin/bash

# Function to compare version numbers
function version_gt() { test "$(printf '%s\n' "$@" | sort -V | head -n 1)" != "$1"; }

# Get required Node.js version from .nvmrc file
required_node_version="v$(cat .nvmrc)"

# Get required PNPM version from package.json file
required_pnpm_version="v$(cat package.json | grep packageManager | cut -d'@' -f2 | tr -d '",')"

# Source nvm if it's installed
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    . "$HOME/.nvm/nvm.sh"
fi

# Check if nvm is installed
nvm_installed=$(command -v nvm)
if [ -z "$nvm_installed" ]; then
    echo "nvm is not installed. Installing..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.nvm/nvm.sh
fi

# Check Node.js version
node_version=$(node -v 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "Node.js is not installed. Installing..."
    nvm install $required_node_version
else
    if version_gt $required_node_version $node_version; then
        echo "Node.js version is less than $required_node_version. Upgrading..."
        nvm install $required_node_version
    else
        echo "Node.js version is correct."
    fi
fi

# Check PNPM version
pnpm_version=$(pnpm -v 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "PNPM is not installed. Installing..."
    npm install -g pnpm@$required_pnpm_version
else
    if version_gt $required_pnpm_version $pnpm_version; then
        echo "PNPM version is less than $required_pnpm_version. Upgrading..."
        npm install -g pnpm@$required_pnpm_version
    else
        echo "PNPM version is correct."
    fi
fi
