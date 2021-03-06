const express = require('express');
const morgan = require('morgan');
const path = require('path');
const React = require('react');
const ReactDom = require('react-dom/server');

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.js');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public/')));

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  })
}

app.get('/restaurants/:id', (req, res) => {
  let components = renderComponents(services, {id: req.params.id});
  res.end(Layout(
    'marZagat',
    App(...components),
    Scripts(Object.keys(services), req.params.id)
  ));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});