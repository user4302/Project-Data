# Setup Instructions

## GitHub Actions Personal Access Token (PAT) Setup

The GitHub Actions workflow requires a Personal Access Token (PAT) to update external repositories. Follow these steps:

### 1. Create a Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Give it a descriptive name (e.g., "Portfolio Update Bot")
4. Set an appropriate expiration period
5. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
6. Click "Generate token"
7. **Important**: Copy the token immediately as you won't be able to see it again

### 2. Add the PAT to Repository Secrets

1. Go to your repository: `user4302/Project-Data`
2. Navigate to Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `PAT`
5. Value: Paste the token you copied
6. Click "Add secret"

### 3. Verify Repository Access

Ensure the PAT has access to:
- `user4302/user4302.git` (your profile README repository)
- `user4302/portfolio-site.git` (your portfolio site repository)

### 4. Test the Workflow

Push any change to the main branch to trigger the workflow and verify it works correctly.

## Troubleshooting

### Authentication Failed Error
If you see "Invalid username or token" error:
1. Verify the PAT was created with the correct scopes
2. Ensure the PAT hasn't expired
3. Check that the PAT secret is correctly added to the repository
4. Make sure the PAT has access to the target repositories

### Repository Not Found Error
If you see "Repository not found" error:
1. Verify the repository names are correct in the workflow
2. Ensure the PAT has access to the target repositories
3. Check that the repositories exist and are accessible

### Permission Denied Error
If you see "Permission denied" error:
1. Ensure the PAT has the `repo` scope
2. Check that you have write access to the target repositories
3. Verify the repositories are not set to read-only
