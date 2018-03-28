# marZagat - Proxy Server

## Credits
This repository is based on a pre-existing front-end capstone project proxy server. Credit due to Stacy: 
Source Repository: https://github.com/bamboo-connection/proxy-server-stacy 
Owner: https://github.com/stayclin

> Welcome to the marZagat food review website. This web application consists of four services - photo gallery, overview, business info, and recommendations.

## Related Projects

  - https://github.com/bamboo-connection/photo-gallery
  - https://github.com/bamboo-connection/overview
  - https://github.com/bamboo-connection/map-side-bar
  - https://github.com/bamboo-connection/recommendations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> 
* __Note:__ Nodemon should be installed globally.
* Open a terminal instance for every service and one for the proxy.
* Follow the steps in each module's ReadMe to set up the respective service.
* Run 'npm start' for the proxy.
* In a browser navigate to localhost:3000

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- npm
- Node
- Jest
- Webpack
- MongoDB

## Development

### Installing Dependencies

From within the root directory:

```
npm install -g webpack
npm install
```
### Manual Setup 
1. Install dependencies: `npm install`
2. Set up and start all microservices (see microservice READMEs)
3. Start server: `npm start`

### Docker Setup
1. Spin up containers: `docker-compose up`
2. Seed database: `docker exec -it <businessinfo container name> npm run seed`