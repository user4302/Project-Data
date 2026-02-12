# Project-Data v1.0.4

A project data management system that parses markdown project files and updates portfolio repositories automatically.

## Features

- Parses project markdown files to extract metadata
- Generates portfolio-ready output
- Automated GitHub workflow for portfolio updates
- Supports multiple project types and categorization
- Secure authentication with Personal Access Token validation
- Dual-platform support (GitHub + GitLab integration)
- Proper Git user identity configuration for cross-platform commits
- Intelligent branch detection for both main and master conventions

## Usage

Run the generator to parse projects:
```bash
node generate.js
```

The workflow will automatically update your portfolio repositories when changes are pushed to the main branch.

## Setup

See [SETUP.md](SETUP.md) for detailed instructions on configuring GitHub Actions authentication for both GitHub and GitLab repositories.
