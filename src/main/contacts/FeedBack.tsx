import { useEffect, useState } from "react";
import validator from "validator";
import InputMask from "react-input-mask";

function MyInput(inputProps: any) {
    const { value, setValue, setValid, require, ...props } = inputProps;
    const [dirty, setDirty] = useState(false);
    const [error, setError] = useState("");

    const updateValue = (e: any) => {
        let newVal = e.target.value;
        let newErr = "";
        const length = newVal.length;

        switch (e.target.id) {
            case "name":
                if (length < 3) {
                    newErr = "Некорректное имя!";
                };
                break;
            case "email":
                if (length && !validator.isEmail(newVal)) {
                    newErr = "Некорректный Email!";
                }
                break;
            case "phone":
                if (!/^(\+7)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(newVal)) {
                    newErr = "Некорректный номер телефона!";
                }
                break;
            case "problem":
                if (length > 300) {
                    newErr = "Достигнута максимальная длинна сообщения (300)";
                }
                break;
        }

        setError(newErr);
        setValue(newVal);
        setValid(!newErr && newVal.length);
    };

    const blurHandler = (e: any) => {
        setDirty(true);
        if (!error) {
            if (e.target.value.length === 0 && require) {
                setError("Обязательное поле");
            } else {
                setError("");
            }
        }
        setValid(!error);
    };

    const MyTag = props.type === "textarea" ? "textarea" : props.type === "phone" ? InputMask : "input";
    return (
        <div key={props.id} className="form-group">
            <label htmlFor={props.id}>{props.label} {(error && dirty) && <div className="error">{error}</div>}</label>
            <MyTag className="form-control"
                {...props}
                value={value}
                onChange={updateValue}
                onBlur={blurHandler}
            />
        </div>
    );
}

function FeedBackForm(props: any) {
    const [formValid, setFormValid] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);

    const inputs = [
        {
            id: "name", type: "text",
            label: "Ваши имя и фамилия",
            require: true,
            placeholder: "Введите ваше имя",
            value: name,
            setValue: setName,
            setValid: setNameValid

        },
        {
            id: "email", type: "email",
            label: "Электронная почта",
            require: true,
            placeholder: "expample@itmo.ru",
            value: email,
            setValue: setEmail,
            setValid: setEmailValid
        },
        {
            id: "phone", type: "phone",
            label: "Номер телефона",
            require: false,
            placeholder: "+7 (999) 999-99-99",
            mask: "+7 (999) 999-99-99",
            value: phone,
            setValue: setPhone,
            setValid: setPhoneValid

        },
        {
            id: "problem", type: "textarea",
            label: "Что не понятно и нужно уточнить",
            require: true,
            placeholder: "Введите ваше сообщение",
            rows: 5,
            value: message,
            setValue: setMessage,
            setValid: setMessageValid
        },
    ];

    useEffect(() => {
        if (nameValid && emailValid && phoneValid && messageValid) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }

    }, [nameValid, emailValid, phoneValid, messageValid]);

    const showOk = (e: any) => {
        e.preventDefault();
        console.log(name, email, phone, message);
        props.closeForm(false);
        props.openDone(true);
        setTimeout(() => {
            setFormValid(false);
            for (const i of inputs) {
                i.setValid(false);
                i.setValue("");
            }
        }, 1000);
    };

    return (
        <form className="feedback">
            <h2 style={{ textAlign: "center" }}>Напишите нам!</h2>
            {inputs.map(input => MyInput(input))}
            <p>Отправляя данную форму, вы даете согласие на обработку своих <a href="https://itmo.ru">Персональных данных</a></p>
            <button className="click-more"
                disabled={!formValid}
                onClick={showOk}
                type="submit">
                <i className="bi bi-envelope"></i>
                Отправить
            </button>
        </form >
    );
}

function FeedBackDone(props: any) {
    return (
        <div className="feedbackDone">
            <h4>Спасибо за обратную связь!</h4>
            <button className="btn btn-primary" onClick={() => props.closeDone(false)}>Ок</button>
        </div>
    );
}


export { FeedBackForm, FeedBackDone };