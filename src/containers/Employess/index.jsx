import React, { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT_USERS } from "../../config";
import ItemList from "../../components/ItemList";
import UserForm from "../../components/UserForm";

const Employess = () => {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState();

  const getAllUsers = async (access_token) => {
    const result = await axios
      .get(END_POINT_USERS, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .catch((error) => {
        alert("ERROR OBTENIENDO USUARIOS DEL API");
      });

    return result;
  };

  const handleEdit = (user) => {
     setUserSelected(user);
  }

  useEffect(() => {
        const token = localStorage.getItem("token");
        getAllUsers(token).then((response) => {
            setUsers(response.data);
            console.log("USUARIOS", users);
        });
  }, []);

  return (
    <div>
      <div>
        <h3> Listado de Empleados</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <ItemList name={user.name} handleEdit={()=>{handleEdit(user)}} />
            </li>
          ))}
        </ul>
      </div>
      <UserForm userSelected = {userSelected}/>
    </div>
  );
};

export default Employess;
