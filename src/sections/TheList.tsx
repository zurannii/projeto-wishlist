import { forwardRef } from "react";
import  WishlistCard  from "../components/WishlistCard";
import "../styles/TheList.css";


type WishlistItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

type TheListProps = {
  items: WishlistItem[];
};

export const TheList = forwardRef<HTMLDivElement, TheListProps>(
  ({ items }, ref) => {
    return (
      <section ref={ref} className="wishlist-section">
        <div className="container">
          <div className="section-title text-center mb-20">
            <div className="ornamental-line mb-4">
              <div className="line-item line-center"></div>
              <span className="diamond-text small">◆</span>
              <div className="line-item line-center"></div>
            </div>
            <h2 className="section-heading mb-4">THE COLLECTION</h2>
            <p className="section-subheading">
              Objetos de desejo cuidadosamente curados
            </p>
          </div>

          <div className="wishlist-grid">
            {items.map((item) => (
              <WishlistCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>

          <div className="ornamental-line mt-20">
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