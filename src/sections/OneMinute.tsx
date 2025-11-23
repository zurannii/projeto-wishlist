import { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { supabase } from "../lib/supabase";
import "../styles/OneMinute.css";

export const OneMinute = () => {
    const [status, setStatus] = useState<"idle" | "recording" | "uploading" | "success" | "error">("idle");

    const { startRecording, stopRecording, clearBlobUrl } = useReactMediaRecorder({
        audio: true,
        onStop: (_blobUrl, blob) => handleUpload(blob),
    });

    const handleStart = () => {
        setStatus("recording");
        startRecording();
    };

    const handleStop = () => {
        stopRecording();
    };

    const handleUpload = async (blob: Blob) => {
        setStatus("uploading");

        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.wav`;

        const { error } = await supabase.storage
            .from('capsula_audios')
            .upload(fileName, blob, {
                contentType: 'audio/wav',
            });

        if (error) {
            console.error(error);
            setStatus("error");
        } else {
            setStatus("success");
            clearBlobUrl();
        }
    };

    return (
        <section className="oneminute-section">
            <div className="container">
                <div className="section-title text-center mb-12">
                    <div className="ornamental-line mb-4">
                        <div className="line-item line-center"></div>
                        <span className="diamond-text small">◆</span>
                        <div className="line-item line-center"></div>
                    </div>
                    <h2 className="section-heading">CÁPSULA DO TEMPO</h2>
                </div>

                <div className="oneminute-content">
                    <p className="oneminute-title">
                        Deixe uma mensagem para o meu "eu" do futuro.
                    </p>
                    <p className="oneminute-text">
                        Se você chegou até o fim desta wishlist, obrigada de coração.
                        <br />
                        Ter você aqui fará o meu aniversário ser mais significativo.
                        <br /><br />
                        E, por favor, não se preocupe se não puder me dar nada material.
                        <br />
                        O presente mais precioso que alguém pode me oferecer é um minuto do seu tempo,
                        <br />
                        da sua voz, da sua memória.
                        <br /><br />
                        Um áudio de, no mínimo, <strong>1 minuto</strong> já me basta, porque nele cabe algo que dinheiro nenhum compra:
                        <br />
                        a sensação de que alguém pensou em mim.
                        <br /><br />
                        Só vou ouvir no <strong>dia 31 de dezembro</strong>, como quem abre um tesouro guardado com cuidado.
                        <br />
                        Obrigada por existir aqui, agora, e por tornar este dia menos solitário e muito mais humano.
                    </p>


                    <div className="recorder-container">

                        {status === "idle" && (
                            <button onClick={handleStart} className="whatsapp-button record-btn">
                                <span className="whatsapp-icon">🎙️</span>
                                <span className="button-text">GRAVAR MENSAGEM</span>
                                <div className="button-hover-bg"></div>
                            </button>
                        )}

                        {status === "recording" && (
                            <div className="recording-ui">
                                <div className="pulse-dot"></div>
                                <p className="recording-text">Gravando... Fale algo bonito!</p>
                                <button onClick={handleStop} className="whatsapp-button stop-btn">
                                    <span className="button-text">ENVIAR AGORA</span>
                                </button>
                            </div>
                        )}

                        {status === "uploading" && (
                            <p className="oneminute-subtext">Selando sua mensagem no cofre...</p>
                        )}

                        {status === "success" && (
                            <div className="success-message">
                                <p className="oneminute-text">Mensagem guardada no tempo! Obrigada.</p>
                                <button onClick={() => setStatus("idle")} className="reset-link">
                                    Gravar outro
                                </button>
                            </div>
                        )}

                        {status === "error" && (
                            <p className="oneminute-subtext" style={{ color: 'red' }}>
                                Ops! Algo deu errado. Tente recarregar a página.
                            </p>
                        )}

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