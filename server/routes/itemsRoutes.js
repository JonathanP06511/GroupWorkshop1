const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Obtener todos los items
 *     responses:
 *       200:
 *         description: Lista de items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

/**
 * @swagger
 * /api/items:
 *   post:
 *     summary: Crear un nuevo item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item creado
 */
router.post('/', (req, res) => {
  const newItem = { id: Date.now(), name: req.body.name };
  res.status(201).json(newItem);
});

module.exports = router;
