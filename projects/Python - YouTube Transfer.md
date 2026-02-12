**Project Title:** YouTube Brand Account Video Mover

**Type:** Personal

**Short Description:**
This Python script automates transferring YouTube videos between Brand Accounts by downloading videos using yt-dlp with cookie-based authentication and uploading them via the YouTube Data API. The tool solves the problem of manually migrating video content between YouTube channels, supporting private videos and batch operations through flexible input sources.

**My Role & Contribution:**
I designed and implemented a complete video transfer automation system that handles authenticated downloads, OAuth-based uploads, and flexible configuration management. The solution includes automatic cookie export, multiple input source support, CLI arguments with environment variable overrides, and robust error handling for production use.

**Key Technologies/Skills:**
- Python 3.7+ with yt-dlp for video downloading
- Google YouTube Data API v3 with OAuth 2.0 authentication
- Cookie-based authentication for private video access
- Environment variable configuration with python-dotenv
- Command-line interface with argparse
- File processing and temporary file management
- subprocess automation for browser cookie export

**Impact/Results:**
- Automated video transfers between YouTube Brand Accounts, eliminating manual upload processes
- Successfully handles private and member-only content through authenticated downloads
- Supports batch processing of multiple videos from various input sources
- Reduces transfer time from hours of manual work to automated execution
- Provides flexible configuration for different use cases and privacy requirements

**Visuals Needed:**
- CLI execution screenshot showing download and upload progress
- Authentication flow diagram (OAuth consent screen)
- Configuration setup example (.env file structure)
- Cookie export process visualization
- Before/after comparison of video transfer results

**Links:**
- [GitLab](https://gitlab.com/user4302_Projects/coding/python/youtube-transfer)

**Tags:**
- Python
- YouTube
- yt-dlp
- Google-API
- YouTube-Data-API
- OAuth
- Authentication
- Cookie-Authentication
- Video-Download
- Video-Upload
- Brand-Account
- CLI
- argparse
- Environment-Variables
- Automation
- Video-Transfer