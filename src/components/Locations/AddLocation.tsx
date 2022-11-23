import React, { useRef } from 'react'
import { useRecoilState } from 'recoil';
import locationAtom from '../../recoil/location/atom';

type PageProps = {}

const AddLocation = (props: PageProps) => {
    const [{ locationData }, setLocationData] = useRecoilState(locationAtom);
    const locationRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);

    const addLocationHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //validate form
        if (!locationRef.current || !descriptionRef.current || !verifyRef.current) {
            return
        }
        if (locationRef.current.value === '' || descriptionRef.current.value === '') {
            return
        }

        const locationInput = locationRef.current.value;
        const descriptionInput = descriptionRef.current.value;
        const verifyInput = verifyRef.current.checked;

        const newLocation = {
            location: locationInput,
            description: descriptionInput,
            isVerified: verifyInput,
        }

        // update state 
        setLocationData((prevState) => ({
            ...prevState,
            locationData: [...locationData, newLocation]
        }))

        // clear form 
        locationRef.current.value = '';
        descriptionRef.current.value = '';
    }

    return (
        <div className='py-10'>
            <h2 className='text-center font-semibold text-lg'>Add Location</h2>
            <div className='flex justify-center'>
                <div className='p-5 border rounded'>
                    <form onSubmit={addLocationHandler}>
                        <div>
                            <label htmlFor="location">Location</label>
                            <input
                                className="border block focus:outline-0 focus:ring-1 focus:ring-orange-100"
                                id="location"
                                type="text"
                                ref={locationRef}

                            />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="border block w-full focus:outline-0 focus:ring-1 focus:ring-orange-100"
                                id="description"
                                ref={descriptionRef}
                            />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="description">Verified</label>
                            <input
                                className="border block w-full focus:outline-0"
                                id="description"
                                type="checkbox"
                                ref={verifyRef}
                            />
                        </div>
                        <button className='bg-orange-300 px-3 py-1 mt-4 rounded' type="submit">Add Location</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddLocation