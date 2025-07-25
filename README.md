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
- **Code Quality**: Automated linting and formatting for HTML, CSS, and JavaScript
- **Protected Workflow**: All changes go through PRs with automated quality checks

## 📁 Project Structure

```
├── index.html          # Main page
├── css/
│   └── style.css       # Custom styles (lexicographically sorted)
├── js/
│   └── app.js          # Interactive JavaScript
├── images/             # Images and favicons
├── manifest.json       # PWA configuration
├── package.json        # Node.js dependencies and scripts
├── server.js           # Custom Node.js development server
├── .eslintrc.json      # JavaScript linting rules
├── .stylelintrc.json   # CSS linting rules
├── .htmlhintrc         # HTML linting rules
├── .prettierrc         # Code formatting rules
├── .prettierignore     # Files to ignore during formatting
├── .gitignore          # Git ignore patterns
└── README.md           # This file
```

## 🛠️ Customization

### 1. Edit Projects

To modify projects, edit the `index.html` file directly. Each project is defined as an `<article>` element with the class `project-card`:

```html
<article class="project-card has-hero-image" role="listitem" id="your-project-id">
    <a href="YOUR_MAIN_LINK" target="_blank" rel="noopener noreferrer" class="hero-link" 
       aria-label="Visitar página de YOUR_PROJECT" title="Visitar página">
        <img src="./images/your-project-hero.png" alt="Your Project Description" 
             class="project-hero-image" width="400" height="250" role="img">
    </a>
    <div class="project-content">
        <h2 class="sr-only">Your Project Name</h2>
        <p class="project-description">
            Your project description with <span class="city-name">La Plata</span> 
            and other relevant information.
        </p>
    </div>
    <nav class="project-footer" aria-label="Enlaces de Your Project" role="navigation">
        <a href="YOUR_FACEBOOK_LINK" class="link-button" target="_blank" 
           rel="noopener noreferrer" title="Página de Facebook" 
           aria-label="Página de Facebook de Your Project">
            <i class="fab fa-facebook" aria-hidden="true"></i>
            <span class="sr-only">Facebook</span>
        </a>
        <a href="YOUR_GROUP_LINK" class="link-button" target="_blank" 
           rel="noopener noreferrer" title="Grupo de Facebook" 
           aria-label="Grupo de Facebook de Your Project">
            <i class="fas fa-users" aria-hidden="true"></i>
            <span class="sr-only">Grupo de Facebook</span>
        </a>
        <a href="YOUR_INSTAGRAM_LINK" class="link-button" target="_blank" 
           rel="noopener noreferrer" title="Instagram" 
           aria-label="Instagram de Your Project">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">Instagram</span>
        </a>
        <a href="mailto:your-email@gmail.com" class="link-button" title="Enviar email" 
           aria-label="Enviar email a Your Project">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <span class="sr-only">Email</span>
        </a>
    </nav>
</article>
```

### 2. Add New Projects

To add a new project:

1. **Copy the template above** and place it in the `projects-container` section
2. **Update the following elements:**
   - `id` attribute (unique identifier)
   - Hero image path in `./images/` folder
   - Project description with `<span class="city-name">La Plata</span>` for city names
   - All social media links and their `aria-label` attributes
   - Email address

3. **Add the hero image** to the `./images/` folder (recommended size: 400x250px)

### 3. Customize Colors

Edit `css/style.css` to change the theme colors:

```css
:root {
    --bg-gradient-start: rgba(255, 160, 16, 0.15);  /* Orange brand color */
    --bg-gradient-middle: rgba(253, 118, 36, 0.2);
    --bg-gradient-end: rgba(255, 189, 6, 0.15);
}
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

- **Theme Toggle**: Light/dark mode switching with system preference detection
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsive Design**: Automatic layout adjustments
- **PWA Support**: Installable as a mobile app

## 🔧 Development

### Code Quality Tools

This project uses several linters and formatters to maintain code quality:

#### **Available Scripts:**
```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Run all linters
npm run lint

# Run individual linters
npm run lint:html    # HTML validation
npm run lint:css     # CSS best practices
npm run lint:js      # JavaScript quality

# Auto-fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check

# Run full validation (lint + format check)
npm run validate
```

#### **Linters Used:**
- **HTMLHint**: HTML validation and best practices
- **Stylelint**: CSS formatting and maintainability (with lexicographically sorted properties)
- **ESLint**: JavaScript code quality and modern practices
- **Prettier**: Consistent code formatting across all files

#### **GitHub Actions:**
- **Lint Workflow**: Runs on all PR creation with auto-fix capabilities
- **CI/CD Workflow**: Builds Docker images on PR creation (no direct push to main)
- **Retag Workflow**: Retags images as `main` and `latest` on PR merge

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:8080](http://localhost:8080)

3. **Run linters before committing:**
   ```bash
   npm run validate
   ```

4. **Auto-fix issues:**
   ```bash
   npm run lint:fix
   npm run format
   ```

### Development Server Features

The custom Node.js development server (`server.js`) provides:

- ✅ Proper MIME types for all file types
- ✅ Security headers and directory traversal protection
- ✅ Graceful error handling
- ✅ Environment variable support (PORT, HOST)
- ✅ Clean shutdown with Ctrl+C

## 🔒 Protected Workflow

This repository uses a protected `main` branch workflow:

- **No direct pushes to `main`** - All changes must go through Pull Requests
- **Automated quality checks** - Linting and formatting run on every PR
- **Auto-fix capabilities** - GitHub Actions can automatically fix common issues
- **Required reviews** - All PRs require approval before merging

### Workflow Process:

1. **Create feature branch** from `main`
2. **Make changes** and test locally
3. **Push branch** and create Pull Request
4. **Automated checks** run (linting, formatting)
5. **Review and approve** the PR
6. **Merge to `main`** - triggers retag workflow for Docker images

## 📄 License

This project is under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run linters (`npm run validate`)
6. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
7. Push to the branch (`git push origin feature/AmazingFeature`)
8. Open a Pull Request

**Note:** The GitHub Actions workflow will automatically check your code quality and may create fixes for you.

---

**Redes en La Plata** - Connecting digital communities 