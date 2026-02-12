**Project Title:** PowerShell Duplicate File Finder and Organizer

**Type:** Open-Source

**Short Description:**
A PowerShell script that efficiently identifies and manages duplicate files within specified directories. The tool uses file hashing to detect exact duplicates and provides an automated solution for organizing them while preserving folder structure. It features intelligent caching to avoid reprocessing unchanged files and utilizes parallel processing for optimal performance on large file collections.

**My Role & Contribution:**
I developed a comprehensive PowerShell-based duplicate file detection and management system from scratch. The implementation includes advanced features like CSV-based hash caching with automatic cleanup, parallel file hashing using runspaces for multi-core optimization, and intelligent duplicate file organization that preserves original directory structures. I also built in robust progress tracking, verbose logging capabilities, and a safe preview mode that allows users to review actions before executing file moves.

**Key Technologies/Skills:**
- PowerShell Scripting (Advanced)
- Parallel Processing with Runspaces
- File Hashing (SHA-256)
- CSV Data Management
- File System Operations
- Progress Tracking and UI Feedback
- Error Handling and Validation
- Multi-threaded Programming

**Impact/Results:**
- Enables efficient processing of large file collections through parallel hashing across multiple CPU cores
- Reduces processing time significantly through intelligent caching system that avoids rehashing unchanged files
- Provides safe duplicate management with preview functionality before actual file operations
- Organizes duplicates while maintaining original folder structure for easy recovery and review

**Visuals Needed:**
- CLI interface showing file scanning and hashing progress
- Duplicate detection results display
- File organization structure in Duplicates folder
- Hash cache CSV file format example
- Before/after directory structure comparison

**Links:**
- [Gitlab](https://gitlab.com/user4302_Projects/coding/powershell/duplicate-file-finder)

**Tags:**
- PowerShell
- File-Management
- Duplicate-Detection
- Hashing
- SHA-256
- CSV
- Caching
- Parallel-Processing
- Runspaces
- Multi-Threading
- File-System
- Progress-Tracking
- Error-Handling
- Performance