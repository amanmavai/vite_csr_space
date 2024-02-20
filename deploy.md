```sh

# 1. Modify vite.config.js to set the base path for your app.
export default defineConfig({
  base: '/your-project-name/',
  plugins: [react()]
});

# 2. Set Homepage in package.json
"homepage": "https://yourusername.github.io/your-project-name/",

# 3. Build your application
npm run build

# 4. Install the gh-pages package to help with the deployment to GitHub Pages.
npm install gh-pages -D

# 5. Configure Deployment Scripts
"deploy": "gh-pages -d dist",
"predeploy": "npm run build"

# 6. Run the deploy script which will build your app and push it to the gh-pages branch of your repository.
npm run deploy

# 7. Configure GitHub Pages in Your Repository Settings
Go to your repository on GitHub, navigate to Settings > Pages, and select the gh-pages branch as your source. Click Save.

# 8. Access Your Deployed Site
After GitHub Pages is configured, your site should be live at https://amanmavai.github.io/vite_csr_space/.

# 9. Update Your react router setup to have base path
 const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

```
