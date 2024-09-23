const express = require('express');
const router = express.Router();
const Car = require('../models/Car');  // Importez le modèle Car

// Endpoint POST pour créer une voiture
router.post('/create', async (req, res) => {
  try {
    const { id, brand, model, year } = req.body;
    if (!id || !brand || !model || !year) {
      return res.status(400).json({ message: "Veuillez fournir tous les champs requis : id, brand, model, year" });
    }

    const newCar = new Car({ id, brand, model, year });
    await newCar.save();
    res.status(201).json({ message: 'Voiture créée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de voiture' });
  }
});

// Endpoint GET pour récupérer toutes les voitures
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des voitures' });
  }
});

// Endpoint DELETE pour supprimer une voiture
router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "L'ID de la voiture est requis pour la suppression" });
    }

    const result = await Car.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Aucune voiture trouvée avec cet ID" });
    }
    res.status(200).json({ message: "Voiture supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la voiture' });
  }
});

module.exports = router;
