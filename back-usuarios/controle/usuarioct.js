import {db} from "../db.js";


export const getUsers = (_, res) =>
{

    const q = "select * from user";

    db.query(q, (err,data) => {
        if (err) return res.json(err);
        
        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO user(`name`, `email`) VALUES(?)";
  
    const values = [
      req.body.name,
      req.body.email
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };

export const deleteUser = (req, res) => {
  const q = "DELETE FROM user where `id` = ?";
  
  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
}

