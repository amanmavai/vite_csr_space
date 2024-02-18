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

# shadcn
npm i -D @types/node
npx shadcn-ui@latest init

# individual components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add command
npm install @radix-ui/react-icons
npx shadcn-ui@latest add select

```
