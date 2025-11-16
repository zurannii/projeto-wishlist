import "../styles/Hero.css";
import "../global/App.css";

type HeroProps = {
    onScrollToWishlist: () => void;
};

export const Hero = ({ onScrollToWishlist }: HeroProps) => {
    return (
        <section className="hero-section">
            <div className="hero-bg-texture"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1689658855445-b1b2d50ee618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFja2VkJTIwdGV4dHVyZSUyMGRhcmt8ZW58MXx8fHwxNzYzMjI3MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                }}></div>

            <div className="hero-bg-smoke"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1655942144741-f5cff077553a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc21va2UlMjB0ZXh0dXJlfGVufDF8fHx8MTc2MzEyNzU0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                }}></div>

            <div className="hero-vignetes"></div>

            <div className="hero-content">
                <div className="ornamental-line mb-8">
                    <div className="line-item line-left"></div>
                    <div className="diamond-ornament"></div>
                    <div className="line-item line-right"></div>
                </div>
                <h1 className="hero-title">MY BIRTHDAY</h1>
                <h2 className="hero-subtitle">Wishlist</h2>

                <p className="hero-description">
                    Uma celebração em tons de sombra e mistério.
                    <br />
                    Desejos cuidadosamente selecionados para este capítulo.
                </p>

                <button onClick={onScrollToWishlist} className="cta-button">
                    <span className="cta-button-text">Ver Wishlist</span>
                    <div className="cta-button-hover-bg"></div>
                </button>

                <div className="ornamental-line mt-12">
                    <div className="line-item line-left-alt"></div>
                    <div className="diamond-text">◆</div>
                    <div className="line-item line-right-alt"></div>
                </div>
            </div>
            <div className="corner-frame top-left"></div>
            <div className="corner-frame top-right"></div>
            <div className="corner-frame bottom-left"></div>
            <div className="corner-frame bottom-right"></div>
        </section>


    )
}
