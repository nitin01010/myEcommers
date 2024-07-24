import React from 'react'
import Photo18 from '../../../../public/Photo18.png';
import photo01 from '../../../../public/photo01.png';
import photo03 from '../../../../public/photo3.png';
import photo04 from '../../../../public/photo4.png';
import photo5 from '../../../../public/photo5.png';



const ImgSection = () => {
    return (
        <div className="max-w-screen-2xl  mx-auto  py-8 lg:py-8 relative bg-white">
            <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-1 flex-col">
                        <img className="object-cover h-full" src={ Photo18 } alt='' />
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <img className="object-cover h-full" src={ photo01 } alt='' />
                        </div>
                        <div>
                            <img className="object-cover h-full" src={ photo03 } alt='' />
                        </div>
                        <div>
                            <img className="object-cover h-full" src={ photo04 } alt='' />
                        </div>
                        <div>
                            <img className="object-cover h-full" src={ photo5 } alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImgSection