**Project Title:** PowerShell Script Administrator Context Menu

**Type:** Open-Source

**Short Description:**
This project provides Windows Registry modification scripts that add an administrative "Run with PowerShell as Administrator" context menu option for PowerShell script files (.ps1). The solution enables users to execute PowerShell scripts with elevated privileges directly from the right-click context menu, streamlining administrative workflows and eliminating the need to manually open PowerShell as an administrator first.

**My Role & Contribution:**
I created a pair of Windows Registry files that modify the Windows Registry to add and remove an administrative context menu option for PowerShell scripts. The implementation includes proper registry keys for both the Microsoft.PowerShellScript.1 and SystemFileAssociations\.ps1 file types, ensuring comprehensive coverage across different Windows file association scenarios.

**Key Technologies/Skills:**
- Windows Registry Editor (.reg files)
- Windows Registry manipulation
- PowerShell command-line execution
- Windows file associations and context menus
- Windows security and UAC integration
- System administration automation

**Impact/Results:**
- Streamlined administrative PowerShell script execution by eliminating manual steps
- Improved productivity for system administrators and power users working with PowerShell scripts
- Enhanced security by ensuring scripts run with appropriate elevation when needed
- Provided a reversible solution with both add and remove registry files

**Visuals Needed:**
- Context menu screenshot showing the new "Run with PowerShell as Administrator" option
- Registry editor screenshot showing the modified keys
- Before/after comparison of right-click menu on .ps1 files
- Demo video showing the streamlined script execution process

**Links:**
- [Gitlab](https://gitlab.com/user4302_Projects/coding/windows-registry/context-run-ps1-as-admin)

**Tags:**
- Windows-Registry
- Registry-Editor
- .reg-files
- Context-Menu
- PowerShell
- Administrator
- Elevated-Privileges
- UAC
- System-Administration
- Automation
- Security
- Windows
- File-Associations
- Shell-Integration