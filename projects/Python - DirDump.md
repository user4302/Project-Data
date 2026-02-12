**Project Title:** Directory Dumper - XML Tree Generator

**Type:** Open-Source

**Short Description:**
A powerful Python utility that generates structured XML trees of directories and files for backup and documentation purposes. The tool provides interactive drive selection, cross-platform compatibility, and intelligent volume tracking with serial numbers. It solves the problem of creating comprehensive file system structure documentation for backup analysis, system auditing, and directory mapping.

**My Role & Contribution:**
I developed the complete XML Directory Dumper application from scratch, implementing the core directory scanning algorithm, Windows-specific drive detection using WMI and ctypes, interactive menu system, and XML output generation. I designed the intelligent file naming convention that incorporates drive types, serial numbers, and timestamps, and created the cross-platform compatibility layer for Windows, macOS, and Linux systems.

**Key Technologies/Skills:**
- Python 3.14+ with standard library optimization
- XML generation using xml.etree.ElementTree
- Windows API integration via ctypes for volume information
- WMI (Windows Management Instrumentation) for drive type detection
- Cross-platform file system operations with pathlib
- Command-line interface design with argparse
- Error handling and permission management
- Virtual environment management with uv

**Impact/Results:**
- Successfully generates XML directory trees up to 134MB in size for large file systems
- Provides zero-dependency core functionality with optional enhanced features
- Implements intelligent drive classification (system/internal/external) for better organization
- Offers depth limitation for performance optimization on large directories
- Maintains version consistency across multiple configuration files

**Visuals Needed:**
- Interactive drive selection menu showing available drives with serial numbers
- Generated XML output structure visualization
- Command-line usage examples with different parameters
- Cross-platform compatibility demonstration
- Error handling output for permission-denied scenarios

**Links:**
- [GitLab](https://gitlab.com/user4302_Projects/coding/python/dirdump)

**Tags:**
- Python
- XML
- File-System
- Directory-Tree
- Windows-API
- ctypes
- WMI
- Cross-Platform
- pathlib
- CLI
- argparse
- Volume-Information
- Backup
- Documentation
- System-Auditing