import "./modal.scss";

function Modal(props: { active: boolean, setActive: any, children: any; }) {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className="content" onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;