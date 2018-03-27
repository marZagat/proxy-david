module.exports = (title, styles, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/html" href="style.css">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;