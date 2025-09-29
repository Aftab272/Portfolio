# Deployment Guide

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites
- Node.js installed (you already have this)
- Vercel CLI installed (you already have this)

## Deployment Steps

1. Open PowerShell or Command Prompt
2. Navigate to your project directory:
   ```bash
   cd "C:\Users\ranaa\Downloads\Portfolio 1"
   ```

3. Run the deployment command:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - "Set up and deploy": Press `Y` and Enter
   - "Which scope do you want to deploy to?": Select your personal account and press Enter
   - "Link to existing project?": Press `N` and Enter
   - "What's your project's name?": Press Enter to use the default or enter a custom name
   - "In which directory is your code located?": Press Enter to use `.` (current directory)
   - "Want to override the settings?": Press `N` and Enter

5. After deployment completes, you'll receive a URL where your site is live

## Alternative: Deploy with Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Import your Git repository (GitHub, GitLab, or Bitbucket) or upload files directly
5. Configure the project settings:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./
6. Click "Deploy"

## Updating Your Site

To update your deployed site after making changes:

1. Commit and push your changes to your Git repository
2. Vercel will automatically redeploy your site

Or if deploying manually:
```bash
vercel --prod
```

## Troubleshooting

If you encounter any issues:
- Make sure you're in the correct project directory
- Check that all files (index.html, style.css, script.js) are present
- Ensure you have an active internet connection
- Verify your Vercel account is properly set up