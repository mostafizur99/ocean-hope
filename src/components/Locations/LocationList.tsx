import React from 'react'
import { useRecoilState } from 'recoil';
import { TSLocation } from '../../../types';
import locationAtom from '../../recoil/location/atom';

type PageProps = {}

const LocationList = (props: PageProps) => {
    const [{ locationData }] = useRecoilState(locationAtom);

    return (
        <div className='mt-8 py-4'>
            <h2 className='text-center font-semibold text-lg'>Location List</h2>
            {
                locationData?.length > 0 &&
                <div className='grid grid-cols-4 gap-3 mt-8'>
                    {locationData?.map((item: TSLocation, index) => (
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