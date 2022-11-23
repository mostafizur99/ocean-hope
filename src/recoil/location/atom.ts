import { atom } from 'recoil';
import { TSLocation } from '../../../types';
import { LOCATION_ATOM_KEY, LOCATION_FILTER_ATOM_KEY } from '../../utils/constants/atomKey';

const initialState: TSLocation[] = []

const locationAtom = atom({
    key: LOCATION_ATOM_KEY,
    default: {
        locationData: initialState,
    },
})

export const locationFilterAtom = atom({
    key: LOCATION_FILTER_ATOM_KEY,
    default: 'ALL',
})

export default locationAtom;