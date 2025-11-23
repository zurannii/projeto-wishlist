import '../styles/WishlistCard.css';

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  isPurchased: boolean; 
  onMarkAsPurchased: (id: number) => void;
};

export const WishlistCard = ({ id, image, title, description, link, isPurchased, onMarkAsPurchased }: Props) => {
  
  const handlePurchaseClick = () => {
    if (window.confirm("Tem certeza que você comprou este item? Isso irá removê-lo da lista para outras pessoas.")) {
      onMarkAsPurchased(id);
    }
  };

  return (
    <div className={`wishlist-card ${isPurchased ? 'purchased' : ''}`}>
      <div className="wishlist-card-image-container">
        <img src={image} alt={title} className="wishlist-card-image" />
        {isPurchased && <div className="purchased-badge">COMPRADO</div>}
      </div>
      
      <div className="wishlist-card-content">
        <h3 className="wishlist-card-title">{title}</h3>
        <p className="wishlist-card-description">{description}</p>
        
        <div className="card-actions">
          {isPurchased ? (
            <button className="wishlist-card-link disabled-link" disabled>
              Indisponível
            </button>
          ) : (
            <>
              <a 
                href={link} 
                className="wishlist-card-link main-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver na Loja
              </a>
              <button 
                onClick={handlePurchaseClick}
                className="wishlist-card-link mark-link"
              >
                Já comprei!
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};