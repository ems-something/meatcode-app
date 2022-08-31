import React, { useState } from "react";
import "./styles.css";
import useForm from "./useForm";

export default function Form() {
    let {
        errServer,
        errorName,
        errorLastName,
        errorEmail,
        errorPhone,
        email,
        lastName,
        name,
        phone,
        setEmail,
        setLastName,
        setName,
        setPhone,
        submitForm,
    } = useForm();
    
    return (
        <form className="form-container">
        <div className="form-container__section">
            <label>
            NOMBRE
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={`form-container__input ${
                errorName ? "form-container__input--error" : ""
                }`}
            />
            </label>
            <label>
            APELLIDO
            <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className={`form-container__input ${
                errorLastName ? "form-container__input--error" : ""
                }`}
            />
            </label>
        </div>
        <div className="form-container__section">
            <label>
            MAIL
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`form-container__input ${
                errorEmail ? "form-container__input--error" : ""
                }`}
            />
            </label>
            <label>
            TELEFONO
            <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={`form-container__input ${
                errorPhone ? "form-container__input--error" : ""
                }`}
            />
            </label>
        </div>
        <input
            className="form-container__submit"
            onClick={(e) => {
            e.preventDefault();
            submitForm();
            }}
            type="submit"
        />
        </form>
    );
}
