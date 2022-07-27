import { ModalSize } from '../models/modal-options';

export const modalSizes: Record<ModalSize, { height: number; width: number }> = {
	sm: { width: 200, height: 300 },
	md: { width: 450, height: 450 },
	lg: { width: 550, height: 600 },
};
