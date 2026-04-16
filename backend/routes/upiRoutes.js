const express = require('express');
const router = express.Router();
const upiController = require('../controllers/upiController');

// All routes are relatively simple, adding auth middleware could be done later if needed
// For now, keeping it consistent with the existing simple route structure

router.get('/', upiController.getAllScanners);
router.post('/', upiController.addScanner);
router.delete('/:id', upiController.deleteScanner);

module.exports = router;
