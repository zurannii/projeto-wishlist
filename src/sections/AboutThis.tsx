import { ImageWithFallback } from '../components/ImageWithFallback';
import '../styles/AboutThis.css';
import '../global/App.css';


export const AboutThis = () => {
    return (
        <section className='about-section'>
            <div className='container'>
                <div className="section-title text-center mb-16">
                    <div className="ornamental-line mb-4">
                        <div className="line-item line-center"></div>
                        <span className="diamond-text small">◆</span>
                        <div className="line-item line-center"></div>
                    </div>
                    <h2 className="section-heading">ABOUT THIS DAY</h2>
                </div>

                <div className="about-grid">
                    <div className="about-text-column">
                        <div className="about-quote-wrapper">
                            <p className="about-quote">
                                "Entre sombras e luz, celebro mais um ano de existência."
                            </p>
                        </div>

                        <p className="about-text">
                            Eu não gosto muito do meu aniversário.
                            <br />Nunca foi uma data que me deixasse confortável ou animada 
                            e tudo bem. Mas ainda assim, existem coisas que eu gosto, pequenos desejos que fazem parte do meu
                            mundo e refletem quem eu sou de verdade.
                        </p>

                        <p className="about-text">
                            Por isso, esta wishlist existe: não para celebrar uma data, mas para reunir o que me inspira, o que
                             combina comigo e o que eu adoraria ter por perto. Um espaço meu: discreto, escuro e cheio das coisas
                            que iluminam minha própria escuridão de um jeito suave.
                        </p>


                        <div className="about-footer-line">
                            <div className="line-item flex-1 line-left-accent"></div>
                            <span className="date-stamp">31 de DEZEMBRO de 2025</span>
                        </div>
                    </div>

                    <div className="about-image-column">
                        <div className="about-image-wrapper">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1730874829217-f7f666e94822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHN0YXR1ZSUyMG1hc2t8ZW58MXx8fHwxNzYzMjI3MDI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Decorative element"
                            />
                            <div className="image-vignette-bottom"></div>
                        </div>
                        <div className="about-image-frame"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}