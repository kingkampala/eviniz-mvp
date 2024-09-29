// Mock blockchain payment using Ethereum
const blockchain = async (req, res) => {
    try {
      const { senderAddress, receiverAddress, amount } = req.body;
      
      // Simulate transaction
      const transaction = {
        from: senderAddress,
        to: receiverAddress,
        value: amount,
        timestamp: Date.now()
      };
      
      res.status(200).json({ message: 'Transaction Successful', transaction });
    } catch (error) {
      res.status(500).json({ error: 'Blockchain payment failed' });
    }
};

module.exports = blockchain;