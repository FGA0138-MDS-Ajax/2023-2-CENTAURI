const express = require('express');
//const mysql = require('mysql2/promise');
const router = require("express").Router()
const pool = require("./../../db");


// Route to handle requests to create a favorite
router.post('/create_favorite', async (req, res) => {
  try {
    const { favoritesId, userToken, documentId } = req.body;
    // Validate input
    if (!favoritesId || !userToken || !documentId) {
      return res.status(300).json({ success: false, message: 'A' });
    }

    await createFavorite(pool, favoritesId, userToken, documentId);

    res.json({ success: true, message: 'Favorite added successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
  
});

// Route to handle requests to list user favorites
router.post('/list_user_favorites', async (req, res) => {
  try {
    const { userEmail } = req.body;

    // Validate input
    if (!userEmail) {
      return res.status(400).json({ success: false, message: 'Invalid request body.' });
    }

    const documents = await listUserFavorites(pool, userEmail);

    res.json({ success: true, documents });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

// Function to create a favorite in the database
async function createFavorite(pool, favoritesId, userToken, documentId) {
  const result = await pool.execute(
    'INSERT INTO favorites (favoritesId, userToken, documentId) VALUES (?, ?, ?)',
    [favoritesId, userToken, documentId]
  );

  if (result[0].affectedRows > 0) {
    console.log('Favorite added successfully!');
  } else {
    console.log('Failed to add favorite.');
    throw new Error('Failed to add favorite.');
  }
}

// Function to list user favorites from the database
async function listUserFavorites(pool, userEmail) {
  const [favorites] = await pool.execute(
    `
    SELECT USER.email, DOCUMENT.docName, DOCUMENT.link, DOCUMENT.content, DOCUMENT.docKey, DOCUMENT.creationDate
    FROM favorites
    INNER JOIN USER ON favorites.userToken = USER.token
    INNER JOIN DOCUMENT ON favorites.documentId = DOCUMENT.docKey
    WHERE USER.email = ?
    ORDER BY USER.email
    `,
    [userEmail]
  );

  return favorites;
}

router.post('/favoritos', (req, res) => {

  console.log('Request received at /favoritos');

  const { favoritesId, userToken, documentId } = req.body;

  // Verifique se o usuário está autenticado, caso contrário, retorne um erro
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Usuário não autenticado.' });
  }

  // Lógica para salvar favoritos no banco de dados
  db.query(
    'INSERT INTO favorites (userToken, documentId) VALUES (?, ?)',
    [userToken, documentId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Erro ao salvar favorito.' });
      }
      return res.status(200).json({ message: 'Favorito salvo com sucesso.' });
    }
  );
});


module.exports = router;