import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Button } from "react-bootstrap";
import './formUser.scss'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [edit, setEdit] = useState();

  return (
    <>
      <label className="form-label mt-3" htmlFor={props.name}>
        {label}
      </label>
      <input {...props} {...field} className={meta.touched && meta.error ? 'form-control error' : 'form-control'} />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>
  );
};

const FormUser = (props) => {
    console.log(props.currentUser)
  const { name, username, email, street, city, zipcode, phone, website, id} = props.currentUser
  const inputsData = [
    { name: "Name", placeholder: "Name" },
    { name: "User Name", placeholder: "Ivan" },
    { name: "E-mail", placeholder: "example@mail.com" },
    { name: "Street", placeholder: "ул. Пример" },
    { name: "City", placeholder: "Москва" },
    { name: "Zip-code", placeholder: "1234234" },
    { name: "Phone", placeholder: "89991112233" },
    { name: "Website", placeholder: "www.example.com" },
    { name: "Comment", placeholder: "" },
  ];

  return (
    <Formik
      initialValues={{
        'name': `${name}`,
        'username': `${username}`,
        'email': `${email}`,


      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Минимум 2 символа")
          .required("Обязательное поле"),
        username: Yup.string()
          .min(3, 'Минимум 2 символа')
          .required('Обязательное поле'),
        email: Yup.string()
          .email('Неправильный email адрес')
          .required('Обязательное поле'),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <MyTextInput label="Имя" id="name" name="name" type="text"  />
        <MyTextInput label="User name" id="username" name="username" type="text" disabled />
        <MyTextInput label="E-mail" id="email" name="email" type="email" disabled/>

        <div className="d-flex justify-content-end mt-4">
            <Button className="button-edit" variant="secondary">Отправить</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormUser;
