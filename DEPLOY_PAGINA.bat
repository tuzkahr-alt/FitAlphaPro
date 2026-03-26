@echo off
title FitAlpha Pro - Subir a GitHub
echo ===========================================
echo   FitAlpha Pro | Despliegue en GitHub
echo ===========================================
echo.
set /p repo_url="Pega la URL de tu repositorio (ej: https://github.com/usuario/mi-app.git): "
echo.
echo Vinculando repositorio...
git remote add origin %repo_url%
echo Subiendo archivos...
git branch -M main
git push -u origin main
echo.
echo ===========================================
echo ¡Listo! Ahora ve a 'Settings' > 'Pages' en GitHub
echo y activa el despliegue desde la rama 'main'.
echo ===========================================
pause
