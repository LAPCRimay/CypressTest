# CypressTest
Ejercicio Práctico para proceso de selección NTT DATA

1. Instalar node JS versión 18
2. Instalar VS Code
3. Instalar java jdk versión 20
4. Abrir con VS Code la carpeta CypressTest
5. En la terminal de VS Code ejecutar:
 a. npm i
 b. npm run test:report:allure, con este comando se ejecutan las pruebas y se genera el reporte
Se ejecutan las pruebas generando:
 a. Reporte simple(cypressTest\cypress\reports\html)
 b. Reporte allure(cypressTest\allure-report\index.html) para abrir este reporte ejecutar: npm run report:allure
 b. Capturas de pantalla (cypressTest\screenshots\purchase.test.cy.js)
 c. Video (cypressTest\cypress\videos)


NOTA: Si se desea probar con más de 2 productos cambiar el valor de la variable 'numProducts'
en el archivo cypress.config.js y volver a ejecutar npm run test