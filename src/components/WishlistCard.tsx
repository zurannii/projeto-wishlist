import '../styles/WishlistCard.css';

type Props = {
    image: string;
    title: string;
    description: string;
    link: string;
};

export default function WishlistCard({ image, title, description, link }: Props) {
    return (
        <div className="wishlist-card">
            <div className="wishlist-card-image-container">
                <img src={image} alt={title} className="wishlist-card-image" />
            </div>
            <div className="wishlist-card-content">
                <h3 className="wishlist-card-title">{title}</h3>
                <p className="wishlist-card-description">{description}</p>
                <a href={link} className="wishlist-card-link" target="_blank" rel="noopener noreferrer">
                    Ver Detalhes
                </a>
            </div>
        </div>
    );
}