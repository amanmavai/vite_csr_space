```sh
# inside csr_space dir
npm create vite@latest . -- --template react-ts

# remove existing css files
rm -rf src/index.css src/App.css

# prettier
npm install -D prettier
npm install -D prettier-plugin-tailwindcss

# tailwind
npm install -D tailwindcss postcss postcss-import autoprefixer
npx tailwindcss init -p

# react-router-dom
npm install react-router-dom

```