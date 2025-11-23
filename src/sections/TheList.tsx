import { forwardRef } from "react";
import { WishlistCard } from "../components/WishlistCard";
import "../styles/TheList.css";

type WishlistItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

type TheListProps = {
  books: WishlistItem[];
  socks: WishlistItem[];
  misc: WishlistItem[];
  purchasedIds: number[]; 
  onMarkAsPurchased: (id: number) => void; 
};

export const TheList = forwardRef<HTMLDivElement, TheListProps>(
  ({ books, socks, misc, purchasedIds, onMarkAsPurchased }, ref) => {
    
    const renderSection = (title: string, items: WishlistItem[]) => {
      if (!items || items.length === 0) return null;

      return (
        <div className="category-wrapper mb-20">
          <div className="section-title text-center mb-12">
            <div className="ornamental-line mb-4">
              <div className="line-item line-center"></div>
              <span className="diamond-text small">◆</span>
              <div className="line-item line-center"></div>
            </div>
            <h2 className="section-heading mb-4">{title}</h2>
          </div>

          <div className="wishlist-grid">
            {items.map((item) => (
              <WishlistCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
                // Passando os dados para o card
                isPurchased={purchasedIds.includes(item.id)}
                onMarkAsPurchased={onMarkAsPurchased}
              />
            ))}
          </div>
        </div>
      );
    };

    return (
      <section ref={ref} className="wishlist-section">
        <div className="container">
          <div className="text-center mb-16">
             <p className="section-subheading">
              Objetos de desejo cuidadosamente curados
            </p>
          </div>

          {renderSection("Livros", books)}
          {renderSection("Meias & Conforto", socks)}
          {renderSection("Diversos", misc)}

          <div className="ornamental-line mt-12">
            <div className="line-item line-left-alt"></div>
            <div className="dot-ornament">
              <div className="dot dot-accent"></div>
              <div className="dot dot-normal"></div>
              <div className="dot dot-accent"></div>
            </div>
            <div className="line-item line-right-alt"></div>
          </div>
        </div>
      </section>
    );
  }
);