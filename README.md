# Redes en La Plata - Static Site

A modern static site for Redes en La Plata, showcasing multiple projects with their respective social media links and contact information. Built with pure HTML, CSS, and JavaScript, served by Nginx.

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

### 1. Edit Projects

To modify projects, edit the `index.html` file directly. Each project is defined as an `<article>` element with the class `project-card`:

```html
<article class="project-card has-hero-image" role="listitem" id="your-project-id">
    <a href="YOUR_MAIN_LINK" target="_blank" rel="noopener noreferrer" class="hero-link">
        <img src="./images/your-project-hero.png" alt="Your Project Description" class="project-hero-image">
    </a>
    <div class="project-content">
        <h2 class="sr-only">Your Project Name</h2>
        <p class="project-description">Your project description</p>
    </div>
    <nav class="project-footer" aria-label="Enlaces de Your Project" role="navigation">
        <a href="YOUR_FACEBOOK_LINK" class="link-button" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook" aria-hidden="true"></i>
            <span class="sr-only">Facebook</span>
        </a>
        <!-- Add more social links as needed -->
    </nav>
</article>
```

### 2. Add New Projects

To add a new project, copy the structure above and modify:
- `id` attribute for the project
- Hero image in `./images/` folder
- Project description
- Social media links in the footer

### 3. Customize Colors

Edit `css/style.css` to change the theme colors:

```css
:root {
    --bg-gradient-start: rgba(255, 160, 16, 0.15);  /* Orange brand color */
    --bg-gradient-middle: rgba(253, 118, 36, 0.2);
    --bg-gradient-end: rgba(255, 189, 6, 0.15);
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
    root /path/to/your/project;
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

### JavaScript Features

The site includes interactive features:

- **Theme Toggle**: Light/dark mode switching
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsive Design**: Automatic layout adjustments
- **PWA Support**: Installable as a mobile app

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

# Redes en La Plata - Static Site Deployment

This project is a static site served by Nginx, ready for production deployment using Docker and Docker Compose.

## Quick Start (Local)

### Option 1: Python HTTP Server (Development)

For quick local development, you can use Python's built-in HTTP server:

```sh
# Python 3
python3 -m http.server 8080

# Python 2 (if available)
python -m SimpleHTTPServer 8080
```

The site will be available at [http://localhost:8080](http://localhost:8080)

### Option 2: Docker (Production-like)

1. **Build the Docker image:**
   ```sh
   docker build -t redes-enlaplata-static .
   ```

2. **Run the container:**
   ```sh
   docker run -p 8080:80 redes-enlaplata-static
   ```
   The site will be available at [http://localhost:8080](http://localhost:8080)

## Production Deployment with Docker Compose

1. **Build and start the app:**
   ```sh
   docker compose -f docker-compose.prod.yml up --build -d
   ```
   The site will be available on port 80 of your server.

2. **Stop the app:**
   ```sh
   docker compose -f docker-compose.prod.yml down
   ```

## CI/CD with GitHub Actions

- This repo is ready for automated Docker builds and pushes using GitHub Actions.
- See `.github/workflows/` for example workflows inspired by the provided `githubaction1.yml` and `githubaction2.yml`.
- You can adapt these to build and push your static site image to GitHub Container Registry or any other registry.

## Notes
- The app is served by Nginx for maximum performance and compatibility.
- The Docker image can be deployed to any container platform (Kubernetes, ECS, etc).
- For custom domains or SSL, use a reverse proxy (like Nginx or Caddy) in front of this container. 