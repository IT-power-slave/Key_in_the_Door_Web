# CI/CD Pipeline Documentation

## Overview

This project uses GitHub Actions to automate code quality checks, testing, building, and deployment. The pipeline ensures code quality and enables continuous integration and deployment.

## Pipeline Stages

### 1. **Lint Stage** (Runs on every push & PR)
   - **CSS Validation**: Checks CSS syntax and styling standards
   - **HTML Validation**: Validates HTML structure and semantics
   - Tools: [Stylelint](https://stylelint.io), [HTMLHint](https://htmlhint.io)

### 2. **Test Stage** (Runs after lint passes)
   - Placeholder for future testing
   - Currently configured for static site (no automated tests needed)

### 3. **Build Stage** (Runs after test passes)
   - Verifies all static assets exist (HTML, CSS)
   - Ensures build artifacts are ready for deployment

### 4. **Deploy Stage** (Runs on main branch push only)
   - Automatically deploys to GitHub Pages
   - Only triggers on successful builds to `main` branch

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Linting
```bash
npm run lint          # Run all linters
npm run lint:css      # Lint CSS only
npm run lint:html     # Lint HTML only
```

### Run Validation (Lint + Test + Build)
```bash
npm run validate
```

### Fix Linting Issues
Most CSS issues can be auto-fixed:
```bash
npm run lint:css -- --fix
```

## Workflows

### Main CI/CD Workflow (`.github/workflows/ci-cd.yml`)

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
1. **lint** - Validates HTML and CSS
2. **test** - Runs tests (placeholder for future expansion)
3. **build** - Verifies static assets
4. **deploy** - Deploys to GitHub Pages (main branch only)

### Custom Deployment Workflow (`.github/workflows/deploy-custom.yml`)

For deploying to custom servers (SFTP, SSH, etc.), use the custom deployment workflow:

```bash
# Trigger manual deployment from GitHub Actions UI
# Select environment: staging or production
```

To configure custom deployment:
1. Add secrets in GitHub Settings:
   - `DEPLOY_HOST`: Server IP/domain
   - `DEPLOY_USER`: SSH/SFTP username
   - `DEPLOY_PASSWORD`: SSH/SFTP password
   - `DEPLOY_PATH`: Remote deployment path

2. Modify `.github/workflows/deploy-custom.yml` to use your deployment method

## Configuration Files

### `.eslintrc.json` (Not Used)
- Included for future JavaScript linting if needed

### `.stylelintrc.json`
- CSS linting configuration
- Rules focused on preventing errors, not enforcing style

### `.htmlhintrc`
- HTML validation configuration
- Checks structure, semantics, and best practices

### `package.json`
- Manages dev dependencies
- Defines npm scripts for linting and validation

## GitHub Pages Deployment

The pipeline automatically deploys to GitHub Pages when you push to `main`:

1. Ensure GitHub Pages is enabled in repository settings
2. Set source to "GitHub Actions"
3. Each push to `main` triggers automatic deployment
4. Site will be available at: `https://<username>.github.io/<repo-name>/`

## Environment Variables & Secrets

Current workflows use minimal secrets. For custom deployments, add these in GitHub Settings → Secrets:

```
DEPLOY_HOST      - Server hostname/IP
DEPLOY_USER      - SSH/SFTP username
DEPLOY_PASSWORD  - SSH/SFTP password
DEPLOY_PATH      - Remote deployment directory
```

## Monitoring Builds

1. Go to repository → **Actions** tab
2. Click workflow run to see details
3. Failed stages show error messages
4. Each job can be expanded to see logs

## Branch Protection

Recommended GitHub branch protection rules for `main`:
- ✓ Require status checks to pass before merging
- ✓ Require branches to be up to date before merging
- ✓ Dismiss stale PR approvals when new commits are pushed

## Extending the Pipeline

### Add New Linting Tools
1. Install tool: `npm install --save-dev <tool>`
2. Add npm script in `package.json`
3. Update `.github/workflows/ci-cd.yml` to run new linter

### Add Testing
1. Install test framework: `npm install --save-dev <framework>`
2. Create test files: `src/**/*.test.js` or `tests/**/*.js`
3. Update `package.json` test script
4. Tests will run in the test stage

### Custom Deployment
1. Update `.github/workflows/deploy-custom.yml`
2. Add required secrets in GitHub Settings
3. Trigger via "Run workflow" button in Actions tab

## Troubleshooting

### Linting Fails
- Check error messages in GitHub Actions logs
- Run locally: `npm run lint`
- Fix issues manually or use: `npm run lint:css -- --fix`

### Deploy Not Triggering
- Ensure workflow file is on the branch being pushed
- Check branch name matches workflow trigger conditions
- Verify all required checks passed

### GitHub Pages Not Updating
- Clear browser cache
- Check GitHub Pages settings in repository
- Verify latest deployment completed successfully

## Resources

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Stylelint Documentation](https://stylelint.io)
- [HTMLHint Documentation](https://htmlhint.io)
- [GitHub Pages Documentation](https://docs.github.com/pages)
