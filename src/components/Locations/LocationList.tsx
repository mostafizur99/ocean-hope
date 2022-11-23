import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';
import { TSLocation } from '../../../types';
import locationAtom, { locationFilterAtom } from '../../recoil/location/atom';
import locationWithFilter from '../../recoil/location/withFilter';

type PageProps = {}

const LocationList = (props: PageProps) => {
    const [locationFilter, setLocationFilter] = useRecoilState(locationFilterAtom);
    const [{ locationData }] = useRecoilState(locationAtom);
    const locationDataFiltered = useRecoilValue(locationWithFilter);

    return (
        <div className='mt-8 py-4'>
            <h2 className='text-center font-semibold text-lg'>Location List</h2>
            {
                locationDataFiltered?.length > 0 &&
                <div>
                    <div>
                        <button className={`mr-2 px-3 py-1 bg-white border ${locationFilter === 'ALL' ? 'border-orange-300' : ''}`}
                            onClick={() => {
                                setLocationFilter('ALL')
                            }}
                        >All</button>
                        <button className={`mr-2 px-3 py-1 bg-white border ${locationFilter === 'VERIFIED' ? 'border-orange-300' : ''}`}
                            onClick={() => {
                                setLocationFilter('VERIFIED')
                            }}
                        >Verified</button>
                        <button className={`mr-2 px-3 py-1 bg-white border ${locationFilter === 'NONVERIFIED' ? 'border-orange-300' : ''}`}
                            onClick={() => {
                                setLocationFilter('NONVERIFIED')
                            }}
                        >Non-Verified</button>
                    </div>
                </div>
            }
            {
                locationDataFiltered?.length > 0 &&
                <div className='grid grid-cols-4 gap-3 mt-8'>
                    {locationDataFiltered?.map((item: TSLocation, index: number) => (
                        <div key={index} className="border text-start p-5">
                            <h3>Location: {item?.location}</h3>
                            <p>Review: {item?.description}</p>
                        </div>
                    ))}
                </div>
            }
            {
                locationData?.length < 1 &&
                <div className='py-5'>
                    <h2 className='text-center'>No Location Found</h2>
                </div>
            }
        </div>
    )
}

export default LocationList