import { useEffect, useState } from "react";
import validator from "validator";
import InputMask from "react-input-mask";

function MyInput(inputProps: any) {
    const { defval, defset, require, ...props } = inputProps;
    const [value, setValue] = useState(defval || "");
    const [dirty, setDirty] = useState(false);
    const [error, setError] = useState("");

    const updateValue = (e: any) => {
        let newVal = e.target.value;
        let newErr = "";
        const length = newVal.length;

        switch (e.target.id) {
            case "name":
                if (length && !validator.isAlpha(newVal, "ru-RU")) {
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
        defset(!newErr && newVal.length);
    };

    const blurHandler = (e: any) => {
        setDirty(true);
        if (!error) {
            if (e.target.value.length === 0 && require) {
                setError("Обязательное поле");
            } else {
                console.log("clear error");
                setError("");
            }
        }
        console.log("setting error", error, dirty);

        defset(!error);
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
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState(false);
    const [message, setMessage] = useState(false);

    const inputs = [
        {
            id: "name", type: "text",
            label: "Ваши фамилия и имя",
            require: true,
            placeholder: "Введите ваше имя",
            defval: name,
            defset: setName
        },
        {
            id: "email", type: "email",
            label: "Электронная почта",
            require: true,
            placeholder: "expample@itmo.ru",
            defval: email,
            defset: setEmail
        },
        {
            id: "phone", type: "phone",
            label: "Номер телефона",
            require: false,
            placeholder: "+7 (999) 999-99-99",
            mask: "+7 (999) 999-99-99",
            defval: phone,
            defset: setPhone

        },
        {
            id: "problem", type: "textarea",
            label: "Что не понятно и нужно уточнить",
            require: true,
            placeholder: "Введите ваше сообщение",
            rows: 5,
            defval: message,
            defset: setMessage
        },
    ];

    useEffect(() => {
        if (name && email && phone && message) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }

    }, [name, email, phone, message]);

    console.log(name, email, phone, message);


    const showOk = (e: any) => {
        e.preventDefault();
        props.closeForm(false);
        props.openDone(true);
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

export default FeedBackForm;