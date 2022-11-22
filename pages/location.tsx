import Link from 'next/link'
import React from 'react'
import AddLocation from '../src/components/Locations/AddLocation'
import LocationList from '../src/components/Locations/LocationList'

type pageProps = {}

const Location = (props: pageProps) => {
    return (
        <div className='container mx-auto py-10'>
            <div className="text-center text-orange-700">
                <Link href={'/'}>Home</Link>
                <Link href={'/location'} className="ml-2">Location</Link>
            </div>
            <h2 className='text-center font-semibold text-2xl'>All Locations</h2>
            <AddLocation />
            <LocationList />
        </div>
    )
}

export default Location