import "../styles/ConfirmationModal.css"

type Props = {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    itemName?: string
};

export const ConfirmationModal = ({ isOpen, onConfirm, onCancel }: Props) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-icon">◆</div>

                <h2 className="modal-title">Confirmar escolha</h2>

                <p className="modal-message">Tem certeza de que deseja marcar este item como comprado?
                    <br />
                    <span className="modal-warning">
                        Isso o tornará indisponível para outras pessoas.
                    </span>
                </p>

                <div className="modal-actions">
                    <button onClick={onCancel} className="modal-btn btn-cancel">
                    Cancelar
                    </button>
                    <button onClick={onConfirm} className="modal-btn btn-confirm">
                    Sim, comprei!
                    </button>
                </div>
            </div>
        </div>
    );
};
