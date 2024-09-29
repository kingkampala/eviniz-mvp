const axios = require('axios');

const property = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const response = await axios.get(`https://mock-government-api.com/property/${propertyId}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching property data' });
  }
};

// Mock government APIs for more detailed property verification
const verify = async (req, res) => {
    try {
      const propertyId = req.params.id;
      
      const ownership = await axios.get(`https://mock-gov.com/property/ownership/${propertyId}`);
      const taxes = await axios.get(`https://mock-gov.com/property/taxes/${propertyId}`);
      const disputes = await axios.get(`https://mock-gov.com/property/disputes/${propertyId}`);
      
      if (ownership.data.verified && taxes.data.clear && disputes.data.none) {
        res.status(200).json({ status: 'Verified', ownership: ownership.data });
      } else {
        res.status(400).json({ status: 'Issues Found', details: { taxes: taxes.data, disputes: disputes.data } });
      }
      
    } catch (error) {
      res.status(500).json({ error: 'Error verifying property' });
    }
};

module.exports = { property, verify };