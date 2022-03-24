import "./pageProfile.scss";
import { Button, Form } from "react-bootstrap";
import "../../usersList/usersList.scss";
import { useState, useEffect } from "react";

const FormUser = () => {
  const [ user, setUser ] = useState(null);
  const inputsData = [
    { name: "Name",
      placeholder:'Name'
},
    { name: "User Name",
      placeholder:'Ivan'
},
    { name: "E-mail",
      placeholder:'example@mail.com'
},
    { name: "Street",
      placeholder:'ул. Пример'
},
    { name: "City",
      placeholder:'Москва'
},
    { name: "Zip-code",
      placeholder:'1234234'
},
    { name: "Phone",
      placeholder:'89991112233'
},
    { name: "Website",
      placeholder:'www.example.com'
},
    { name: "Comment",
      placeholder:''
},
  ];
  
 const inputs = inputsData.map(({name, placeholder}) => {
     return (
        <Form.Group className="mb-3">
            <Form.Label>{name}</Form.Label>
            <Form.Control className={name === 'Comment' ? 'comment-form' : ''} placeholder={placeholder} disabled/>
        </Form.Group>
     )
 })

  return (
    <>
    {inputs}
    </>
    )
};

const PageProfile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-header mt-4">
            <h2>Профиль пользователя</h2>
        <Button variant="primary">
          Редактировать
        </Button>
        </div>
        <div className="profile-inputs mt-2 mb-4">
            <FormUser />
        </div>
        <div className="d-flex justify-content-end mb-4">
            <Button className="button-edit" variant="secondary">Редактировать</Button>
        </div>
      </div>  
    </>
  );
};
export default PageProfile;
