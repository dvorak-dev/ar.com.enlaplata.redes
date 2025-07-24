# Redes en La Plata - Projects Hub

A modern project hub for Redes en La Plata, showcasing multiple projects with their respective social media links and contact information.

## 🚀 Features

- **Project-Based Design**: Each project has its own card with grouped social media links
- **Modern Design**: Clean and attractive interface with gradients and animations
- **Responsive**: Perfectly adapts to all devices
- **PWA Ready**: Installable as a mobile app
- **Accessible**: Keyboard navigation and screen reader support
- **SEO Optimized**: Complete meta tags for social media
- **Fast**: Instant loading without heavy dependencies

## 📁 Project Structure

```
fresh-start/
├── index.html          # Main page
├── css/
│   └── style.css       # Custom styles
├── js/
│   └── app.js          # Interactive JavaScript
├── images/             # Images and favicons
├── manifest.json       # PWA configuration
└── README.md           # This file
```

## 🛠️ Customization

### 1. Edit Projects (Recommended - JSON Configuration)

The easiest way to manage projects is by editing the `config/projects.json` file:

```json
{
  "organization": {
    "name": "Your Organization Name",
    "description": "Your organization description",
    "logo": "./images/logo.png"
  },
  "projects": [
    {
      "id": "your-project-id",
      "title": "Your Project Name",
      "description": "Your project description",
      "links": [
        {
          "platform": "facebook",
          "type": "page",
          "url": "https://facebook.com/yourpage",
          "icon": "fab fa-facebook",
          "title": "Facebook Page"
        }
      ]
    }
  ]
}
```

### 2. Add New Projects

To add a new project, add a new object to the `projects` array:

```json
{
  "id": "new-project",
  "title": "New Project",
  "description": "Description of your new project",
  "links": [
    {
      "platform": "instagram",
      "type": "account",
      "url": "https://instagram.com/yourproject",
      "icon": "fab fa-instagram",
      "title": "Instagram"
    }
  ]
}
```

### 3. Change Personal Information

Modify the bio section in `index.html`:

```html
<div class="bio-section mb-4">
    <h1 class="bio-title">Your Organization Name</h1>
    <p class="bio-description">Your description</p>
</div>
```

### 4. Customize Colors

Edit `css/style.css` to change colors:

```css
body {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
}
```

### 5. Add New Projects

To add a new project, copy this complete structure:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">New Project</h3>
        <p class="project-description">Project description</p>
    </div>
    <div class="project-links">
        <a href="URL1" class="project-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook"></i>
            <span>Facebook</span>
        </a>
        <a href="URL2" class="project-link" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
            <span>Instagram</span>
        </a>
        <a href="mailto:email@domain.com" class="project-link">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
        </a>
    </div>
    <div class="project-footer">
        <a href="PROJECT_WEBSITE_URL" class="project-logo-link" target="_blank" rel="noopener noreferrer">
            <img src="./images/logo.png" alt="Project Name" class="project-logo">
            <span>Visit Website</span>
        </a>
    </div>
</div>
```

## 🚀 Deployment

### Option 1: Nginx (Recommended)

1. Copy all files to your server
2. Configure nginx:

```nginx
server {
    listen 80;
    server_name redes.enlaplata.com.ar;
    root /path/to/fresh-start;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Static cache
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Option 2: GitHub Pages

1. Upload content to a GitHub repository
2. Go to Settings > Pages
3. Select main branch and root folder
4. Your site will be available at `https://username.github.io/repository`

### Option 3: Netlify/Vercel

1. Upload content to GitHub
2. Connect your repository to Netlify or Vercel
3. Automatic deployment on each push

## 📱 PWA (Progressive Web App)

The site is configured as a PWA, which means:

- Can be installed on mobile devices
- Works offline (with service worker)
- Has native icons
- Looks like a native app

## 🎨 Available Icons

You can use any Font Awesome icon. Some examples:

- `fas fa-globe` - Website
- `fab fa-facebook` - Facebook Page
- `fas fa-users` - Facebook Group
- `fab fa-instagram` - Instagram
- `fab fa-twitter` - Twitter/X
- `fab fa-linkedin` - LinkedIn
- `fab fa-github` - GitHub
- `fab fa-youtube` - YouTube
- `fab fa-discord` - Discord
- `fab fa-slack` - Slack
- `fab fa-meetup` - Meetup
- `fas fa-envelope` - Email
- `fab fa-whatsapp` - WhatsApp
- `fab fa-telegram` - Telegram

## 🔧 Advanced Configuration

### Analytics

To add Google Analytics, add this in the `<head>` of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### JavaScript API

The site includes utility functions for dynamic updates:

```javascript
// Update a specific project link
RedesApp.updateProjectLink(projectIndex, linkIndex, newUrl, newText, newIcon);

// Add a new project dynamically
RedesApp.addProject('Project Name', 'Description', [
    {url: 'https://facebook.com', icon: 'fab fa-facebook', text: 'Facebook'},
    {url: 'https://instagram.com', icon: 'fab fa-instagram', text: 'Instagram'}
]);
```

## 📄 License

This project is under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Redes en La Plata** - Connecting digital communities 