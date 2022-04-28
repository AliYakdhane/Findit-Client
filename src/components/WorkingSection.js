import React  from 'react';

import StatusCard from './StatusCard';


export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray ">
        <div className="container max-w-7xl mx-auto px-4 ">
            <div className="flex flex-wrap relative z-50  ">
         
                <StatusCard  color="red" icon="stars" title="Report a lost 
                or found item">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                </StatusCard>
                <StatusCard
                    color="lightBlue"
                    icon="autorenew"
                    title="Prove ownership 
                    of the item"
                >
                    Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious.
                </StatusCard>
                <StatusCard
                    color="teal"
                    icon="fingerprint"
                    title="GET IT BACK!"
                >
                    Write a few lines about each one. A paragraph describing
                    a feature will be enough. Keep you user engaged!
                </StatusCard>
               
            </div>
                </div>

               
            
        </section>
    );
}
