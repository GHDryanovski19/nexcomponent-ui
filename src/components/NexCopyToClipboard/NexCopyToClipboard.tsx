import React from 'react';
import './NexCopyToClipboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { NexCopyToClipboardProps } from './NexCopyToClipboard.types';

const NexCopyToClipboard: React.FC<NexCopyToClipboardProps> = ({ className, type, textToCopy }) => {

    const getColorClass = (type: string | undefined): string => {
        if (!type) return '';
        const colorNames = ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'info', 'warning', 'danger'];
        return colorNames.includes(type as string) ? `nex-copy-to-clipboard--${type}` : '';
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
    };

    const buttonClasses = `nex-copy-to-clipboard ${className || ''} ${getColorClass(type)}`;

    return (
        <button className={buttonClasses} onClick={handleCopy}>
            <FontAwesomeIcon icon={faCopy} />
        </button>
    );
};

export default NexCopyToClipboard;