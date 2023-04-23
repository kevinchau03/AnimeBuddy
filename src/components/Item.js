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
                    <h5 style={{ color:'#37d989' }}>{props.status}</h5>
                </div>
                <div className="days-box">
                    <h4 className="subtitle">Days Until:</h4>
                    <h5 style={{ color:'#ff5c5a' }}>{props.date}</h5>
                </div>
            </div>
        </div>
    );
}

export default Item