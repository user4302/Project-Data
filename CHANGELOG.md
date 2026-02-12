# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2025-06-17

### Fixed
- Added GitLab integration support with proper OAuth2 authentication
- Fixed portfolio repository URL from GitHub to actual GitLab repository
- Corrected file path structure from `data/projects.json` to `src/data/projects.json`
- Enhanced SETUP.md with comprehensive dual-platform documentation
- Added separate token management for GitHub and GitLab repositories

## [1.0.1] - 2025-06-17

### Fixed
- Added proper GitHub Actions permissions for cross-repository operations
- Added PAT validation with clear error messages for missing secrets
- Enhanced authentication handling for profile and portfolio repository updates
- Created comprehensive setup documentation for PAT configuration

## [1.0.0] - 2025-06-17

### Added
- Initial project structure for project data management
- GitHub workflow for automatic portfolio updates
- JavaScript generator for parsing project markdown files
- Basic README documentation

### Fixed
- Fixed template literal syntax in project title generation
- Improved markdown parsing reliability by replacing regex with line-by-line parsing
- Updated GitHub workflow with actual username credentials
