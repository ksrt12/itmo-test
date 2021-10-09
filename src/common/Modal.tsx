import "./modal.scss";

function Modal(props: { active: boolean, setActive: any, children: any; }) {
    const close = () => props.setActive(false);

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={close}>
            <div className="content" onClick={e => e.stopPropagation()}>
                <i className="bi bi-x" onClick={close}></i>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;