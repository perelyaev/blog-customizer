import { useEffect } from 'react'

type TUseEscAndClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLElement>;
};

export const useEscAndClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: TUseEscAndClickClose) => {
	useEffect(() => {
		if (!isOpen) return;
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.();
				onChange?.(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				isOpen && onClose?.();
				onChange?.(false);
			}
		};

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, [onClose, onChange, isOpen]);
};