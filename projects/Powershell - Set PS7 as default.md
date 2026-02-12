**Project Title:** PowerShell 7 Default Configuration Script

**Type:** Open-Source

**Short Description:**
This project provides a PowerShell automation script that sets PowerShell 7 as the default shell on Windows systems. The script automates the process of updating system PATH variables, modifying Windows shortcuts, and creating aliases to ensure PowerShell 7 becomes the primary PowerShell environment. It solves the problem of Windows defaulting to older PowerShell versions despite PowerShell 7 being installed.

**My Role & Contribution:**
I created a comprehensive PowerShell automation script that handles multiple configuration changes to establish PowerShell 7 as the default shell. I implemented functions to update system environment variables, modify taskbar and start menu shortcuts, update the Win+X power user menu, and create persistent aliases. The script includes error handling and user feedback for each operation.

**Key Technologies/Skills:**
- PowerShell Scripting
- Windows Registry and Environment Variables
- Windows Shell COM Objects
- Windows Shortcut Management
- System Administration
- Windows File System Operations
- User Profile Configuration

**Impact/Results:**
- Simplifies the complex process of setting PowerShell 7 as default from multiple manual steps to a single automated script
- Eliminates user confusion between Windows PowerShell 5.1 and PowerShell 7 environments
- Provides consistent PowerShell 7 experience across all Windows entry points (taskbar, start menu, Win+X menu)
- Saves significant time for developers and system administrators managing multiple Windows environments

**Visuals Needed:**
- Script execution output showing successful configuration changes
- Before/after comparison of Windows PowerShell shortcuts pointing to different versions
- Win+X menu showing PowerShell 7 as the default option
- System PATH environment variable showing PowerShell 7 path addition

**Links:**
- [Gitlab](https://gitlab.com/user4302_Projects/coding/powershell/set-ps7-as-default)

**Tags:**
- PowerShell
- PowerShell-7
- Windows
- Configuration
- Registry
- Environment-Variables
- COM-Objects
- Shortcuts
- System-Administration
- File-System
- User-Profile
- Automation
- Shell