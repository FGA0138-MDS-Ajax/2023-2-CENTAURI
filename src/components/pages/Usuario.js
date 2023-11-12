import { useState, useEffect } from "react";
import axios from "axios";
import decode from "./Login.js"


function Usuario(){
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    function handleInputChange(event) {
        users[event.target.decode.name] = event.target.value;
        setUsers(users);
    }


    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
            console.log(res);
        ;
        } catch (error) {
            console.log(error);
            return error;
        }
      };
      useEffect(() => {
        getUsers();
      }, [setUsers]);
    return(
        <div>
            <h1>Usuario</h1>
            
            
        </div>
    )
}

export default Usuario;