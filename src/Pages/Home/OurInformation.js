import { LocationMarkerIcon, MailOpenIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import InformationCartd from './InformationCartd';

const OurInformation = () => {
    return (
        <div className='grid mx-10 lg:mx-0  lg:grid-cols-3 gap-5'>
            <InformationCartd title="Our Location" number="(+088) 01306910346" mail="info.grandauto@cleanit.com" >
                <LocationMarkerIcon className=' h-20 w-20 mx-auto rounded-full hover:bg-yellow-600 text-yellow-600 hover:text-white p-5 border border-yellow-600'  />
            </InformationCartd>
            <InformationCartd title="Contact us Anytime" mail="Fax: 352 536 235" number="01873997166">
                <PhoneIcon className=' h-20 w-20 mx-auto rounded-full hover:bg-yellow-600 text-yellow-600 hover:text-white p-5 border border-yellow-600'  />
            </InformationCartd>
            <InformationCartd title="Write Some Words" number="Support24/7@grandauto.com" mail="info.grandauto@cleanit.com">
                <MailOpenIcon className=' h-20 w-20 mx-auto rounded-full hover:bg-yellow-600 text-yellow-600 hover:text-white p-5 border border-yellow-600'  />
            </InformationCartd>
            
        </div>
    );
};

export default OurInformation;