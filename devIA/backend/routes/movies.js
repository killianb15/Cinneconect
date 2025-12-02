/**
 * Routes pour les films
 */

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

/**
 * @swagger
 * /api/movies/latest:
 *   get:
 *     summary: Récupère les derniers films
 *     tags: [Films]
 *     responses:
 *       200:
 *         description: Liste des derniers films
 */
router.get('/latest', movieController.getLatestMovies);

/**
 * @swagger
 * /api/movies/search:
 *   get:
 *     summary: Recherche des films par titre
 *     tags: [Films]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Terme de recherche
 *     responses:
 *       200:
 *         description: Liste des films correspondants
 */
router.get('/search', movieController.searchMovies);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Récupère les détails d'un film
 *     tags: [Films]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails du film
 *       404:
 *         description: Film non trouvé
 */
router.get('/:id', movieController.getMovieDetails);

module.exports = router;

