import { useState, useEffect } from "react";
import FormSuccess from "./FormSuccess";
import { db } from "../../firebase/config";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    db.collection("contact")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        setLoad(false);
        <FormSuccess />
      }).catch(() => {
        setErrors(validate(values));
        setLoad(false);
      });
      };
    setIsSubmitting(true);
  

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
