import React, { useEffect, useState } from "react";
import useSubscription from "../../hooks/useSubscription";


let nameExp =
/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

let emailExp =
/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let phoneExp =
/[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}/;

function useForm(toast) {
let [name, setName] = useState("");
let [lastName, setLastName] = useState("");
let [email, setEmail] = useState("");
let [phone, setPhone] = useState("");
let [errorName, setErrorName] = useState(false);
let [errorLastName, setErrorLastName] = useState(false);
let [errorEmail, setErrorEmail] = useState(false);
let [errorPhone, setErrorPhone] = useState(false);
let [submited, setSubmited] = useState(false);
const { subscribe } = useSubscription();
const notifySuccess = () => toast("Form successfully complete!");
const notifyUnsuccess = (error) => toast(`Form was not successfully complete: ${error}`);

useEffect(() => {
    if (submited) {
        if (!nameExp.test(name)) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (!nameExp.test(lastName)) {
            setErrorLastName(true);
        } else {
            setErrorLastName(false);
        }
        if (!emailExp.test(email)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        if (!phoneExp.test(phone)) {
            setErrorPhone(true);
        } else {
            setErrorPhone(false);
        }
    }
    return () => {};
}, [name, lastName, email, phone]);

let submitForm = () => {
    let error = false;
    setSubmited(true);
    if (!nameExp.test(name)) {
        setErrorName(true);
        error = true;
    }
    if (!nameExp.test(lastName)) {
        setErrorLastName(true);
        error = true;
    }
    if (!emailExp.test(email)) {
        setErrorEmail(true);
        error = true;
    }
    if (!phoneExp.test(phone)) {
        setErrorPhone(true);
        error = true;
    }
    if (error) return;
    else {
        subscribe({ email, lastname: lastName, phone, firstname: name })
            .then((res)=> notifySuccess())
            .catch(err => notifyUnsuccess(err.message));
    }
};

return {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    errorName,
    errorLastName,
    errorEmail,
    errorPhone,
    submitForm,
};
}

export default useForm;
