import { useState } from "react";
import Modal from "../../common/Modal";
import FeedBackForm from "./FeedBackForm";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./contacts.scss";

function Contacts() {
    const phone = "+79315380170";
    const [modalActive, setFeedbackActive] = useState(false);

    return (
        <div className="contacts">
            <div className="yamaps">
                {/* <YMaps>
                    <Map defaultState={{ center: [59.956479, 30.310127], zoom: 16 }} width="100%" height="400px">
                        <Placemark geometry={[59.956479, 30.310127]} options={{ iconContent: "ИТМО" }} />
                    </Map>
                </YMaps> */}
            </div>
            <div className="info">
                <h2>Контакты</h2>
                <p>г. Санкт-петербург, Кронверский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)</p>
                <p><a href={`tel:${phone}`}>Тел: {phone.replace(/([0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/, '$1 ($2) $3-$4-$5')}</a></p>
                <button className="btn btn-primary" onClick={() => setFeedbackActive(true)}>Написать нам</button>
                <Modal active={modalActive} setActive={setFeedbackActive}>
                    <FeedBackForm />
                </Modal>
            </div>
        </div>
    );
}

export default Contacts;