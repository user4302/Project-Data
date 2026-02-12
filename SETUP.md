# Setup Instructions

## GitHub Actions Token Setup

The GitHub Actions workflow requires tokens to update external repositories. You need two separate tokens:

### 1. GitHub Personal Access Token (PAT) - For Profile README

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Give it a descriptive name (e.g., "Portfolio Update Bot")
4. Set an appropriate expiration period
5. Select the following scopes:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
6. Click "Generate token"
7. **Important**: Copy the token immediately as you won't be able to see it again

### 2. GitLab Personal Access Token - For Portfolio Site

1. Go to GitLab → User Settings → Personal access tokens
2. Click "Add new token"
3. Give it a descriptive name (e.g., "GitHub Actions Portfolio Update")
4. Set an expiration date
5. Select the following scopes:
   - `api` (Full API access)
   - `write_repository` (Write access to repositories)
6. Click "Create personal access token"
7. **Important**: Copy the token immediately as you won't be able to see it again

### 3. Add Tokens to Repository Secrets

1. Go to your repository: `user4302/Project-Data`
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following secrets:

**For GitHub Profile Updates:**
- Name: `PAT`
- Value: Paste the GitHub token you copied

**For GitLab Portfolio Updates:**
- Name: `GITLAB_TOKEN`
- Value: Paste the GitLab token you copied

### 4. Target Repositories (Optional)

The workflow will gracefully handle missing repositories, but to enable full functionality:

#### For Profile README Updates (GitHub):
- Create repository: `user4302/user4302.git`
- Add a README.md with markers:
  ```markdown
  <!-- PROJECTS_START -->
  <!-- Projects will be inserted here -->
  <!-- PROJECTS_END -->
  ```

#### For Portfolio Site Updates (GitLab):
- Repository already exists: `gitlab.com/user4302_Projects/coding/vue-js/angeloedz`
- Ensure it has a `src/data/` directory for `projects.json`

### 5. Test the Workflow

Push any change to the main branch to trigger the workflow. The workflow will:
- Skip profile updates if `user4302/user4302.git` doesn't exist
- Skip portfolio updates if `GITLAB_TOKEN` is not configured
- Continue successfully even if one or both target repositories are missing

## Troubleshooting

### GitHub Authentication Failed Error
If you see "Invalid username or token" error for GitHub:
1. Verify the GitHub PAT was created with the correct scopes
2. Ensure the GitHub PAT hasn't expired
3. Check that the PAT secret is correctly added to the repository
4. Make sure the PAT has access to the target GitHub repositories

### GitLab Authentication Failed Error
If you see GitLab authentication errors:
1. Verify the GitLab token was created with `api` and `write_repository` scopes
2. Ensure the GitLab token hasn't expired
3. Check that the GITLAB_TOKEN secret is correctly added to the repository
4. Verify the GitLab repository URL is correct

### Repository Not Found Error
The workflow now handles this gracefully:
- If a repository doesn't exist, the workflow will log a helpful message and continue
- No manual intervention required - the workflow will complete successfully

### Permission Denied Error
If you see "Permission denied" error:
1. Ensure tokens have the correct scopes
2. Check that you have write access to the target repositories
3. Verify the repositories are not set to read-only

## Workflow Behavior

- **Success**: All repositories exist and are updated
- **Partial Success**: Some repositories missing or tokens not configured - workflow continues with available targets
- **Authentication Failure**: Workflow fails with clear error message
- **No Tokens**: Workflow skips updates with instructions to create tokens
