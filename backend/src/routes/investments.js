const express = require('express');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

const INVESTMENT_PLANS = {
  STARTER: { name: 'Starter Plan', amount: 3000, roi: 15 },
  SILVER: { name: 'Silver Plan', amount: 5000, roi: 20 },
  GOLD: { name: 'Gold Plan', amount: 10000, roi: 25 },
  DIAMOND: { name: 'Diamond Plan', amount: 20000, roi: 30 }
};

// Get Investment Plans
router.get('/plans', (req, res) => {
  res.json({
    plans: Object.entries(INVESTMENT_PLANS).map(([key, value]) => ({
      id: key,
      ...value
    }))
  });
});

// Create Investment
router.post('/invest', authMiddleware, async (req, res) => {
  try {
    const { planId, amount } = req.body;

    const plan = INVESTMENT_PLANS[planId];
    if (!plan) {
      return res.status(400).json({ error: 'Invalid plan' });
    }

    if (amount < plan.amount) {
      return res.status(400).json({ error: `Minimum amount is ₦${plan.amount}` });
    }

    res.json({
      message: 'Investment created',
      investment: { planId, amount, status: 'PENDING' }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get User Investments
router.get('/my-investments', authMiddleware, async (req, res) => {
  res.json({ investments: [] });
});

module.exports = router;
