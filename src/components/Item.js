import "../App.css";

function Item(props) {
    return (
        <div className="container">
            <button className="close-button">❌</button>
            <img 
            src={props.imageSrc} 
            alt="logo" 
            style={{ maxWidth: '75px', maxHeight: '75px' }}
            />
            <h4 className="title">{props.title}</h4>
            <div className="info-container">
                <div className="status-box">
                    <h4 className="subtitle">Status:</h4>
                    <p style={{ color:'#37d989' }}>{props.status}</p>
                </div>
                <div className="days-box">
                    <h4 className="subtitle">Days Until:</h4>
                    <p style={{ color:'#ff5c5a' }}>{props.date + ' Days'}</p>
                </div>
            </div>
        </div>
    );
}

export default Item