# Icon Assets for SEO

This document provides instructions for creating and adding the necessary icon assets for SEO optimization.

## Required Icon Files

Please create and add the following icon files to the public directory:

1. **favicon.ico**
   - Standard favicon file
   - Should be 16x16 or 32x32 pixels
   - Use the Gaia logo or a simplified version of it

2. **icon-16x16.png**
   - 16x16 pixel PNG icon
   - Use the Gaia logo or a simplified version of it

3. **icon-32x32.png**
   - 32x32 pixel PNG icon
   - Use the Gaia logo or a simplified version of it

4. **icon-192x192.png**
   - 192x192 pixel PNG icon for Android devices
   - Use the Gaia logo with good resolution

5. **icon-512x512.png**
   - 512x512 pixel PNG icon for Android devices
   - Use the Gaia logo with high resolution

6. **apple-touch-icon.png**
   - 180x180 pixel PNG icon for iOS devices
   - Use the Gaia logo with good resolution
   - No need for rounded corners or effects (iOS will apply them)

7. **og-image.jpg**
   - 1200x630 pixel JPEG image for social media sharing
   - Should include the Gaia logo, name, and possibly a tagline
   - Use high-quality image with good contrast

## Web Manifest

Also create a site.webmanifest file with the following content:

```json
{
  "name": "Gaia Medico Tradicional",
  "short_name": "Gaia",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#16a34a",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

## Design Guidelines

- Use consistent branding across all icons
- Ensure the logo is recognizable even at small sizes
- Use the brand's green color (#16a34a) where appropriate
- Ensure high contrast for better visibility
- Test icons on different devices and browsers

Once these files are created and added to the public directory, the SEO implementation will be complete for icon assets.