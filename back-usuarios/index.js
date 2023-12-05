const express = require("express"), bodyParser = require('body-parser');
const cors = require("cors")
const db = require("./db.js")
const cookieSession = require("cookie-session")
const passport = require("passport")
const pool = require("./db.js");
require("dotenv").config()
const util = require('util');

const app =  express();

const PORT = process.env.PORT || 8800;
app.use(cookieSession({
    name: 'authSession',
    keys: ["a829989984645-1n9j5s35r34n85fkj83hjiiisc6jg20e"],
    maxAge: 24*60*60*100
}))
app.use(cors({origin: "http://localhost:3000",  //only localhost:3000 can access this server
credentials: true}));

app.use(passport.initialize())
app.use(passport.session());

db.getConnection((err,connection) => {
    if(err)throw err;
    console.log("Connection to database is successful")
})

app.use('/auth', require('./routers/auth/passport.js'));

app.use(bodyParser.json());

// app.use('/create_favorite', require('./routers/auth/old_favorites.js'));

app.post('/create_favorite', async (req, res) => {
    try {
      const { favoritesId, userToken, documentId } = req.body;
      console.log("req.body criar favorito", req.body);
      // Validate input
      if (!favoritesId || !userToken || !documentId) {
        return res.status(300).json({ success: false, message: 'dados insuficientes' });
      } else {
        console.log("dados de favoritos salvos", req.body);
      }
  
      await createFavorite(pool, favoritesId, userToken, documentId);
  
      res.json({ success: true, message: 'Favorite added successfully!' });

    } catch (error) {
        console.log("erro do post de favoritos", req.body);
      console.error('Error:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
    
  });

 app.post('/list_user_favorites', async (req, res) => {
    try {
      const {userEmail} = req.body;
      
      console.log("aaaaaaaa", userEmail.userEmail);
      // Validate input
      if (!userEmail) {
        return res.status(400).json({ success: false, message: 'Invalid request body.' });
      }
  
      const documents = await listUserFavorites(pool, userEmail.userEmail);
  
      res.json({ success: true, documents });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ success: false, message: 'Internal server error.' });
    }
  });

// // app.use("/",userRoutes);
// async function createFavorite(pool, favoritesId, userToken, documentId) {
//     const result = await pool.execute(
//       'INSERT INTO favorites (favoritesId, userToken, documentId) VALUES (?, ?, ?)',
//       [favoritesId, userToken, documentId]
//     );
  
//     if (result[0].affectedRows > 0) {
//       console.log('Favorite added successfully!');
//     } else {
//       console.log('Failed to add favorite.');
//       throw new Error('Failed to add favorite.');
//     }
// }
async function createFavorite(pool, favoritesId, userToken, documentId) {
    const query = util.promisify(pool.query).bind(pool);
  
    try {
      const result = await query(
        'INSERT INTO favorites (favoritesId, userToken, documentId) VALUES (?, ?, ?)',
        [favoritesId, userToken, documentId]
      );
  
      if (result.affectedRows > 0) {
        console.log('Favorite added successfully!');
      } else {
        console.log('Failed to add favorite.\n');
        throw new Error('Failed to add favorite.');
      }
    } catch (error) {
      console.error('Error adding favorite:', error.message);
      throw error;
    }
}

async function listUserFavorites(pool, userEmail) {

  const query = util.promisify(pool.query).bind(pool);
  try {
    const result = await query(
      `
        SELECT USER.email, DOCUMENT.docName, DOCUMENT.link, DOCUMENT.content, DOCUMENT.docKey, DOCUMENT.creationDate
        FROM favorites
        INNER JOIN USER ON favorites.userToken = USER.token
        INNER JOIN DOCUMENT ON favorites.documentId = DOCUMENT.docKey
        WHERE USER.email = (?)
        ORDER BY USER.email
      `, [userEmail]
    );
    if (result.affectedRows > 0) {
      console.log('Favorite selection was successfull!');
    } else {
      console.log('Failed to select favorite.');
      console.log("userEmail: ", userEmail); 
      throw new Error('Failed to selecttt favorite.');
    }


    const [favorites] = await pool.query(query, userEmail.userEmail);

    res.json({ success: true, documents });
    
    return favorites;
  } catch (error) {
    console.log("é aqui o problema?")
    console.error('Error executing query:', error.message);
    throw error;
  }
}


// async function listUserFavorites(pool, userEmail) {
//   const [favorites] = await pool.execute(
//     `
//     SELECT USER.email, DOCUMENT.docName, DOCUMENT.link, DOCUMENT.content, DOCUMENT.docKey, DOCUMENT.creationDate
//     FROM favorites
//     INNER JOIN USER ON favorites.userToken = USER.token
//     INNER JOIN DOCUMENT ON favorites.documentId = DOCUMENT.docKey
//     WHERE USER.email = ?
//     ORDER BY USER.email
//     `,
//     [userEmail]
//   );

//   return favorites;
// }

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}\n`)
})

