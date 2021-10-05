function FeedBackDone(props: any) {
    return (
        <div className="feedbackDone">
            <h4>Спасибо за обратную связь!</h4>
            <button className="btn btn-primary" onClick={() => props.closeDone(false)}>Ок</button>
        </div>
    );
}

export default FeedBackDone;