const businessInfoHost = process.env.BUSINESS_INFO_ADDRESS || 'localhost';

module.exports = {
  "BusinessInfo": `http://${businessInfoHost}:3003/app`
}