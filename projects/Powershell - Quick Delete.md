**Project Title:** Quick Delete - Windows Folder Deletion Utility

**Type:** Open-Source

**Short Description:**
Quick Delete is a Windows PowerShell utility that provides fast and secure folder deletion through a right-click context menu. The project solves the common problem of slow or unreliable Windows file deletion by implementing a robust PowerShell script that handles locked files and directories. It allows users to safely delete folders with confirmation prompts and proper error handling.

**My Role & Contribution:**
I designed and implemented a complete Windows folder deletion utility consisting of two main PowerShell scripts. The main script ([quick_delete.ps1](cci:7://file:///d:/Projects/Powershell/quick-delete/quick_delete.ps1:0:0-0:0)) handles the actual folder deletion with safety checks and error handling, while the setup script ([quick_delete_setup.ps1](cci:7://file:///d:/Projects/Powershell/quick-delete/quick_delete_setup.ps1:0:0-0:0)) automates the installation process by adding the script to the Windows PATH and creating a right-click context menu entry. I also included a custom icon file for better user experience.

**Key Technologies/Skills:**
- PowerShell Scripting
- Windows Registry Manipulation
- Windows Environment Variables
- File System Operations
- Windows Context Menu Integration
- Error Handling and User Input Validation
- Windows Security (Administrator Privileges)

**Impact/Results:**
- Provides users with a one-click solution for deleting stubborn folders that Windows Explorer cannot remove
- Eliminates the need for manual command-line operations or third-party tools
- Includes safety mechanisms with confirmation prompts to prevent accidental deletions
- Successfully integrates with Windows shell for seamless user experience

**Visuals Needed:**
- Right-click context menu showing "Quick Delete" option
- Confirmation dialog during deletion process
- Success/error message screenshots
- Before/after comparison of folder deletion
- Setup script execution screenshots

**Links:**
- [GitLab](https://gitlab.com/user4302_Projects/coding/powershell/quick-delete)

**Tags:**
- PowerShell
- Windows
- File-Deletion
- Context-Menu
- Registry
- Environment-Variables
- File-System
- Shell-Integration
- Error-Handling
- Security
- Administrator
- Automation
- Utilities