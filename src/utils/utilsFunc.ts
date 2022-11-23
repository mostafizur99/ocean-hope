import { TSLocation } from '../../types'

export const isVerified = (location: TSLocation) => location.isVerified;
export const isNonVerified = (location: TSLocation) => !location.isVerified;

export const filterLocations: any = {
    ALL: (state: TSLocation[]) => (state),
    VERIFIED: (state: TSLocation[]) => (state.filter(isVerified)),
    NONVERIFIED: (state: TSLocation[]) => (state.filter(isNonVerified)),
};