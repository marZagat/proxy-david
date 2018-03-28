const businessinfo_address = process.env.BUSINESS_INFO_ADDRESS || 'localhost';

module.exports = {
  "BusinessInfo": `http://${businessinfo_address}:3003/app`
}