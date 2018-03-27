const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public/')));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const renderComponents = (components, props = {}) => {
  return Object.keys(components).map(item => {
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  })
}

app.get('/restaurants/:id', async (req, res) => {

  let components = renderComponents(services, {restaurantId: req.params.id});
  // console.log(Layout(
  //   'marZagat',
  //   App(...components),
  //   Scripts(Object.keys(services), req.params.id)
  // ));
  res.end(Layout(
    'marZagat',
    App(...components),
    Scripts(Object.keys(services), req.params.id)
  ));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});





// *** OLD SERVER INHERITED ***
// require('newrelic');
// const express = require('express')
// const morgan = require('morgan');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 3000;
// const request = require('request');

// app.use(morgan('dev'));
// // app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.redirect('/restaurants/25/');
// });

// app.use('/restaurants/:id', express.static(path.join(__dirname, 'public')));

// app.get('/api/restaurants/:id/gallery', (req, res) => {
//   res.redirect(`http://13.57.148.57/api/restaurants/${req.params.id}/gallery`)
// });
// app.get('/api/restaurants/:id/overview', (req, res) => {
//   res.redirect(`http://184.169.248.150/api/restaurants/${req.params.id}/overview`)
// });
// app.get('/api/restaurants/:id/businessinfo', (req, res) => {
//   res.redirect(`http://localhost:3003/api/restaurants/${req.params.id}/businessinfo`)
// });
// app.get('/api/restaurants/:id/recommendations', (req, res) => {
//   res.redirect(`http://52.89.102.101/api/restaurants/${req.params.id}/recommendations`)
// });

// app.listen(port, () => {
//   console.log(`server running at: http://localhost:${port}`)
// });
