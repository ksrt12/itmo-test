import { useState } from "react";
import Modal from "../../common/Modal";
import FeedBackForm from "./FeedBackForm";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./contacts.scss";

function Contacts() {
    const phone = "+79315380170";
    const [feedbackActive, setFeedbackActive] = useState(false);
    const [feedbackDone, setFeedbackDone] = useState(false);

    return (
        <div className="contacts">
            <div className="yamaps">
                <YMaps>
                    <Map defaultState={{ center: [59.956533, 30.306737], zoom: 16 }} width="100%" height="400px">
                        <Placemark geometry={[59.956479, 30.310127]} />
                    </Map>
                </YMaps>
            </div>
            <div className="info">
                <h2>Контакты</h2>
                <p>г. Санкт-петербург, Кронверский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)</p>
                <p>Тел: <a href={`tel:${phone}`}>{phone.replace(/([0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/, '$1 ($2) $3-$4-$5')}</a></p>
                <a className="click-more"
                    onClick={() => setFeedbackActive(true)}
                >
                    <i className="bi bi-envelope"></i>
                    Написать нам</a>
                <Modal active={feedbackActive} setActive={setFeedbackActive}>
                    <FeedBackForm closeForm={setFeedbackActive} openDone={setFeedbackDone} />
                </Modal>
                <Modal active={feedbackDone} setActive={setFeedbackDone}>
                    <div className="done">Спасибо за обратную связь!</div>
                    <button className="btn btn-primary" onClick={() => setFeedbackDone(false)}>Ок</button>
                </Modal>
            </div>
        </div>
    );
}

export default Contacts;