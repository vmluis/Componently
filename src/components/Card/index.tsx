import "./style.scss"

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={title} className="card__image" />}
            <div className="card__content">
                <h2 className="card__title">{title}</h2>
                <p className="card__description">{description}</p>
            </div>
        </div>
    );
};

export default Card;