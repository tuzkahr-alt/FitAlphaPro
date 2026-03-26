@echo off
title FitAlpha Pro - Local Host
echo Iniciando servidor local para FitAlpha Pro...
echo App disponible en: http://localhost:8080
echo Presiona Ctrl+C para detener el servidor.
npx http-server ./ -p 8080 -c-1
pause
