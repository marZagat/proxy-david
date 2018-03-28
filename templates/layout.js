module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" type="text/html" href="style.css">
      <link rel="stylesheet" type="text/html" href="businessinfostyles.css">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;