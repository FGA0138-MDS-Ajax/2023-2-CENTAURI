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