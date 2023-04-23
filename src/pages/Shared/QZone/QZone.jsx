import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary mt-4'>
            <h4 className='text-white pt-3 ps-3'>Q - Zone</h4>
            <div className='text-center'>
                <img className='pb-5' src={qzone1} alt="" />
                <img className='pb-5' src={qzone2} alt="" />
                <img className='pb-5' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;