import "../styles/OneMinute.css";

export const OneMinute = () => {

    const phoneNumber = "8192747418";

    const message = encodeURIComponent("Oi, Rob! Aqui está o meu áudio de um minuto para você... 🖤");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className="oneminute-section">
            <div className="container">
                <div className="section-title text-center mb-12">
                    <div className="ornamental-line mb-4">
                        <div className="line-item line-center"></div>
                        <span className="diamond-text small">◆</span>
                        <div className="line-item line-center"></div>
                    </div>
                    <h2 className="section-heading">UM MINUTO DO SEU TEMPO</h2>
                </div>

                <div className="oneminute-content">
                    <p className="oneminute-text">
                        Não preciso de grandes embrulhos ou caixas pesadas.
                        <br />
                        O presente mais valioso que você pode me dar é a sua voz e a sua memória.
                    </p>

                    <p className="oneminute-subtext">
                        Peço que me envie um áudio de apenas <strong>1 minuto</strong> (ou mais, se quiser. Prometo ouvir!).
                        <br />
                        Pode ser algo bonito, uma lembrança nossa, um desejo para o futuro ou apenas um carinho.
                        <br />
                        É um presente imaterial, mas que ecoará para sempre em mim.
                        <br /><br />

                        E se não for possível me presentear de outra forma, não tem problema.
                        <br />
                        Esse áudio já será o suficiente para me fazer sentir lembrada, e isso é o que<strong> realmente importa</strong> para mim.
                    </p>



                    <div className="oneminute-action">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                        >
                            <span className="whatsapp-icon">🎙️</span>
                            <span className="button-text">Enviar Áudio</span>
                            <div className="button-hover-bg"></div>
                        </a>
                    </div>
                </div>

                <div className="ornamental-line mt-16">
                    <div className="line-item line-left-alt"></div>
                    <div className="diamond-text">◆</div>
                    <div className="line-item line-right-alt"></div>
                </div>
            </div>
        </section>
    );
};