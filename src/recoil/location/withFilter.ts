import { selector } from "recoil";
import { LOCATION_WITH_FILTER_KEY } from "../../utils/constants/atomKey";
import { filterLocations } from "../../utils/utilsFunc";
import locationAtom, { locationFilterAtom } from "./atom";

const locationWithFilter = selector({
    key: LOCATION_WITH_FILTER_KEY,
    get: ({ get }) => {
        const filter = get(locationFilterAtom);
        const locationsAll = get(locationAtom);

        return filterLocations[filter](locationsAll.locationData);
    },
});

export default locationWithFilter;