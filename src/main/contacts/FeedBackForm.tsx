import { useState } from "react";
import Modal from "../../common/Modal";


function MyInput(props: any) {
    const [value, setValue] = useState("");
    const [dirty, setDirty] = useState(false);
    const [error, setError] = useState("");

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const updateValue = (e: any) => {
        const newVal = e.target.value;
        switch (e.target.id) {
            case "email":
                if (!re.test(String(newVal).toLowerCase())) {
                    setError("Некорректный Email!");
                } else {
                    setError("");
                }
                break;
            case "name":
                break;
            case "problem":
                if (newVal.length > 300) {
                    setError("Достигнута максимальная длинна сообщения (300)");
                } else {
                    setError("");
                }
                break;
        }
        setValue(newVal);
    };

    const blurHandler = (e: any) => {
        if (e.target.value.length === 0 && e.target.require === "true") {
            setError("Обязательное поле");
        } else {
            setError("");
            updateValue(e);
        }
        setDirty(true);
    };

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label} {(error && dirty) && <div style={{ color: "red" }}>{error}</div>}</label>
            {props.type !== "textarea" ?
                <input className="form-control"
                    {...props}
                    value={value}
                    onChange={updateValue}
                    onBlur={blurHandler}
                />
                :
                <textarea rows="5" className="form-control"
                    {...props}
                    value={value}
                    onChange={updateValue}
                    onBlur={blurHandler}
                />
            }
        </div>
    );
}

function FeedBackForm(props: any) {
    const inputs = [
        { id: "name", type: "text", label: "Ваши фамилия и имя", require: "true", placeholder: "Введите ваше имя" },
        { id: "email", type: "email", label: "Электронная почта", require: "true", placeholder: "expample@itmo.ru" },
        { id: "phone", type: "phone", label: "Номер телефона", require: "false", placeholder: "+7 123 456 78 90" },
        { id: "problem", type: "textarea", label: "Что не понятно и нужно уточнить", require: "true", placeholder: "Введите ваше сообщение" },
    ];
    const [formValid, setFormValid] = useState(true);


    const showOk = (e: any) => {
        e.preventDefault();
        props.closeForm(false);
        props.openDone(true);
    };

    return (
        <form className="">
            <h2 style={{ textAlign: "center" }}>Напишите нам!</h2>
            {inputs.map(input => <MyInput key={input.id} {...input} />)}
            <button
                disabled={!formValid}
                onClick={showOk}
                type="submit"
                className="btn btn-primary"
            >Отправить</button>
            <p>Отправляя данную форму, вы даете согласие на обработку своих Персональных данных</p>
        </form >
    );
}

export default FeedBackForm;