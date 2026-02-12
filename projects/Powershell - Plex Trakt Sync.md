**Project Title:** Plex-Trakt Sync Automation Script

**Type:** Personal

**Short Description:**
This PowerShell automation script integrates Plex Media Server with Trakt.tv synchronization service. The script monitors Plex streaming activity and automatically triggers plextraktsync synchronization when appropriate, ensuring that watched status and play progress are consistently updated between the two platforms without interrupting active streaming sessions.

**My Role & Contribution:**
I designed and implemented a PowerShell automation script that intelligently manages Plex-Trakt synchronization timing. The script checks for active Plex streaming sessions and uses a file-based flag system to control when synchronization occurs, preventing interruptions during playback while ensuring timely updates when streaming stops.

**Key Technologies/Skills:**
- PowerShell scripting
- Plex Media Server API integration
- Trakt.tv service integration
- File-based state management
- HTTP web requests and API calls
- Conditional logic and flow control
- Command-line automation

**Impact/Results:**
- Eliminated synchronization conflicts during active Plex streaming sessions
- Automated the manual process of running plextraktsync commands
- Improved reliability of watched status synchronization between Plex and Trakt
- Reduced user intervention required for maintaining media tracking consistency

**Visuals Needed:**
- Script execution flow diagram
- Example of streaming session detection output
- File flag creation/deletion demonstration
- Console output showing successful synchronization

**Links:**
- [Gitlab](https://gitlab.com/user4302_Projects/coding/powershell/plex-trakt-sync)

**Tags:**
- PowerShell
- Automation
- Plex
- Trakt
- API-Integration
- Media-Server
- State-Management
- File-System
- HTTP-Requests
- Web-Requests
- API-Calls
- CLI
- Synchronization
- Media