import { atom } from 'recoil';
import { TSLocation } from '../../../types';
import { LOCATION_ATOM_KEY } from '../../utils/constants/atomKey';

const initialState: TSLocation[] = []

const locationAtom = atom({
    key: LOCATION_ATOM_KEY,
    default: {
        locationData: initialState,
    },
})

export default locationAtom;