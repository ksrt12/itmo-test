import { useState } from "react";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

function MyInput(props: any) {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [dirty, setDirty] = useState(false);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const updateValue = (e: any) => {
        const newVal = e.target.value;
        switch (e.target.name) {
            case "email":
                re.test(String(newVal).toLowerCase());
                break;
            case "name":
                break;
            case "problem":
                break;
        }
        setValue(e.target.value);
    };

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case "email":
                break;
            case "name":
                break;
            case "problem":
                break;
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}{valid && <div className="error">*</div>}</label>
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

function FeedBackForm() {
    const inputs = [
        { id: "name", type: "text", label: "Ваши фамилия и имя", placeholder: "Введите ваше имя" },
        { id: "email", type: "email", label: "Электронная почта", placeholder: "expample@itmo.ru" },
        { id: "phone", type: "phone", label: "Номер телефона", placeholder: "+7 123 456 78 90" },
        { id: "problem", type: "textarea", label: "Что не понятно и нужно уточнить", placeholder: "Введите ваше сообщение" },
    ];
    return (
        <form className="">
            <h2 style={{ textAlign: "center" }}>Напишите нам!</h2>
            {inputs.map(input => <MyInput key={input.id} {...input} />)}
            <button type="submit" className="btn btn-primary">Отправить</button>
        </form >
    );
}

export default FeedBackForm;