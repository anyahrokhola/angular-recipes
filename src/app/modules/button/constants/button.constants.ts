import { BtnSize } from '../models/btn';

export const btnSizes: Record<BtnSize, { height: number; width: number }> = {
	xs: { width: 90, height: 20 },
	sm: { width: 105, height: 28 },
	md: { width: 120, height: 34 },
	lg: { width: 150, height: 46 },
};
