# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel with all the necessary assets.

## Prerequisites

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Prepare your image assets (see Image Assets section below)

## Image Assets

Before deploying, you need to add the following images to the `images` folder:

1. `profile_pic.jpg` - Your profile picture
2. `muslim_college.jpg` - School/College logo
3. `cui_logo.jpg` - University logo
4. `dice_1.jpg` - Dice game project screenshot
5. `kit _drum.jpg` - Drum kit project screenshot
6. `Spice _Garden.png` - Spice Garden restaurant project screenshot

Note: The CSS and HTML course images are using CDN placeholder images, so you don't need to add them.

## Deployment Steps

### Method 1: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository or upload the project files directly
4. Vercel will automatically detect it's a static site
5. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install Vercel CLI globally:
   ```
   npm install -g vercel
   ```

2. Navigate to your project directory:
   ```
   cd Portfolio_1
   ```

3. Deploy with:
   ```
   vercel
   ```

4. Follow the prompts to configure your deployment

## Project Structure

After adding images, your project structure should look like this:

```
Portfolio_1/
├── images/
│   ├── profile.jpg
│   ├── school.jpeg
│   ├── muslim-college.jpg
│   ├── cui.jpg
│   ├── dice1.jpg
│   ├── kit-drum.jpg
│   ├── spice-garden.png
│   ├── css-course.jpg
│   └── html-course.webp
├── index.html
├── style.css
├── script.js
├── vercel.json
├── README.md
└── DEPLOYMENT-GUIDE.md
```

## Notes

- All image paths in the HTML have been updated to use relative paths pointing to the `images` folder
- The `vercel.json` file is already configured for static site deployment
- Make sure all image files are in the correct format and size for optimal loading performance

## Troubleshooting

If images don't appear after deployment:

1. Check that all image files are in the `images` folder
2. Verify file names match exactly (case-sensitive)
3. Ensure file formats are correct (.jpg, .jpeg, .png, .webp)
4. Check browser console for any 404 errors

Your portfolio will be live at a URL provided by Vercel after successful deployment!