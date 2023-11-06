import {db} from "../db.js";

export const getUsers = (_, res) =>
{

    const q = "select * from user;";

    db.query(q, (err,data) => 
    {

        if (err)
        {

            return res.json(err);

        }
        else
        {

            return res.status(200).json(data);

        }

    });

};

export const addUser = (req, res) => {
    const q =
      "INSERT INTO user(`nome`, `email`, `token`) VALUES(?)";
  
    const values = [
      req.decoded.nome,
      req.decoded.email,
      req.decoded.sub
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário criado com sucesso.");
    });
  };