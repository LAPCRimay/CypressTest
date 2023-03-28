# CypressTest
Ejercicio Práctico para proceso de selección NTT DATA

1. Instalar node JS 
2. Instalar VS Code
3. Instalar la última versión de java para los reportes de allure
4. Clonar el repo
5. En la terminal de VS Code ejecutar:
 a. npm i
 b. npm run test:report:allure, con este comando se ejecutan las pruebas y se genera el reporte
Se ejecutan las pruebas generando:
 a. Reporte (cypressTest\cypress\reports\html)
 b. Capturas de pantalla (cypressTest\screenshots\purchase.test.cy.js)
 c. Video (cypressTest\cypress\videos)


NOTA: Si se desea probar con más de 2 productos cambiar el valor de la variable 'numProducts'
en el archivo cypress.config.js y volver a ejecutar npm run test