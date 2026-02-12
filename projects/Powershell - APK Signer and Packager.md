**Project Title:** APK Signing and Packaging PowerShell Automation

**Type:** Open-Source

**Short Description:**
This PowerShell automation script streamlines Android APK signing workflows by integrating with Uber APK Signer to digitally sign one or multiple APK files using a configured keystore. The tool solves the manual complexity of APK signing by providing an interactive interface that handles file selection, batch processing, backup management, and optional packaging into distributable ZIP archives. It preserves original filenames while maintaining organized folder structures for signed and packaged outputs.

**My Role & Contribution:**
I designed and implemented a comprehensive PowerShell automation solution that handles the entire APK signing lifecycle from file selection through final packaging. The script includes robust error handling, backup mechanisms with timestamped folders, interactive user prompts for file selection, and seamless integration with external Java-based signing tools. I implemented modular functions for backup management, file operations, and ZIP packaging, along with detailed logging and user feedback throughout the process.

**Key Technologies/Skills:**
- PowerShell 5.0+ scripting and automation
- Java Runtime Environment integration
- Android APK signing and keystore management
- Uber APK Signer tool integration
- File system operations and backup strategies
- ZIP archive creation and management
- Interactive CLI development
- Error handling and process management

**Impact/Results:**
- Automated what was previously a manual, error-prone APK signing process
- Reduced signing time for multiple APKs from manual individual processing to batch automation
- Implemented comprehensive backup system preventing data loss during file operations
- Created reusable tool that can be deployed across different development environments
- Streamlined the packaging workflow for APK distribution with optional ZIP archive creation

**Visuals Needed:**
- Main CLI interface showing APK selection prompts
- Folder structure diagram showing signed/packaging folders and backup organization
- Sample output showing successful signing process
- Configuration setup screenshot showing keystore parameters
- ZIP package creation workflow demonstration

**Links:**
- [GitLab](https://gitlab.com/user4302_Projects/coding/powershell/apk-signer-and-packager)
- [Uber APK Signer GitHub](https://github.com/patrickfav/uber-apk-signer) (referenced dependency)

**Tags:**
- PowerShell
- Automation
- APK
- Android
- Signing
- Java
- Uber-APK-Signer
- Keystore
- File-Operations
- Backup
- ZIP
- CLI
- Error-Handling
- Packaging