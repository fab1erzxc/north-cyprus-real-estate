#!/bin/bash

# Скрипт для ручного развертывания на GitHub Pages

echo "🚀 Deploying to GitHub Pages..."

# Сборка проекта
npm run typecheck
npm run build

# Создание gh-pages ветки и развертывание
npm install -g gh-pages
npx gh-pages -d dist

echo "✅ Deployment complete!"
echo "🌐 Your site should be available at: https://your-username.github.io/your-repo-name/"
