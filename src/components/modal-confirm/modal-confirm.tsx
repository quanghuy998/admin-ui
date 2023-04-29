import { Box, Button, Modal } from '@mui/material';
import React from 'react';

interface IProps {
    open: boolean;
    onClose: any;
    onConfirm: any;
    header: string;
    message: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ModalConfirm: React.FC<IProps> = ({ open, onClose, onConfirm, header = 'Confirm', message }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h3 id="modal-modal-title">{header}</h3>
                <p>{message}</p>
                <div className="button-section">
                    <Button color="success" variant="outlined" onClick={onConfirm}>
                        Submit
                    </Button>
                    <Button color="error" variant="outlined" onClick={onClose}>
                        Cancel
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default ModalConfirm;
