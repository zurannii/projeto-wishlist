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
                            Meu aniversário sempre foi uma data de sentimentos misturados.
                            <br />Eu gosto dele… mas ao mesmo tempo parece que sempre falta algo, como se existisse um pedaço invisível que nunca se encaixa.
                        </p>

                        <p className='about-text'>
                            Eu nunca consigo ficar 100% feliz nesse dia.
                            <br />É como se ele trouxesse à tona uma parte minha que carrega… não sei… um sentimento pesado, quase como se eu tivesse alguma maldição que me acompanha.
                            <br />Isso me faz perder um pouco do encanto.
                            <br />Com o tempo, acabei me afastando da ideia de festa, de comemoração,
                            de tudo que envolvesse o meu próprio aniversário, mas não porque eu não quisesse celebrar a vida,
                            e sim porque esse dia sempre veio carregado de sentimentos que me deixavam
                            um pouco triste, um pouco perdida, um pouco receosa.
                        </p>

                        <p className="about-text">
                            Esperar a meia-noite sempre trouxe um aperto no peito, como se aquele instante
                            dissesse se eu realmente importo para alguém.
                        </p>

                        <p className="about-text">
                            E o dia em si quase nunca é leve. É corrido, vazio em alguns momentos, e às vezes
                            cheio de esquecimentos que apagam um pouco do brilho que eu gostaria que ele tivesse.
                        </p>

                        <p className="about-text">
                            Por isso, esta wishlist não é sobre presentes.
                            <br />É sobre carinho, presença e significado. É sobre tornar esse dia um pouco mais meu,
                            mais doce.
                        </p>

                        <p className="about-text">
                            Cada item aqui é um gesto de afeto.
                            <br />E eu agradeço imensamente se você quiser participar disso.
                        </p>




                        <div className="about-footer-line">
                            <div className="line-item flex-1 line-left-accent"></div>
                            <span className="date-stamp">31 de DEZEMBRO de 2025</span>
                        </div>
                    </div>

                    <div className="about-image-column">
                        <div className="about-image-wrapper">
                            <ImageWithFallback
                                src="/assets/estatua-rob.png"
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