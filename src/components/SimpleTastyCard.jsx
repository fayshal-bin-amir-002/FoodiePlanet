import PropTypes from 'prop-types';
import { IoIosTime } from "react-icons/io";
import { TbToolsKitchen } from "react-icons/tb";
import { IoIosHeart } from "react-icons/io";
import { useState } from 'react';

const SimpleTastyCard = ({ card }) => {

    const [react, setReact] = useState(false);
    
    return (
        <div className="overflow-hidden shadow-lg rounded-3xl flex flex-col bg-sky-50">
            <div className="relative">
                <img className="w-full h-[250px] object-cover"
                    src={card.image}
                    alt="image" />
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
                <button
                    onClick={() => setReact(!react)}
                    className={`${react ? 'text-red-500' : 'text-gray-400'} flex text-4xl absolute top-4 right-4 cursor-pointer transition duration-500 ease-in-out bg-white p-2 rounded-full`}>
                    <IoIosHeart />
                </button>
            </div>
            <div className="px-6 py-4 mb-auto">
                <p
                    className="font-medium text-lg inline-block transition duration-500 ease-in-out mb-2">{card.name}</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between ">
                <span href="#" className="py-1  font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <IoIosTime className='text-lg' />
                    <span className="ml-1">{card?.time} Minutes</span>
                </span>

                <span href="#" className="py-1  font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <TbToolsKitchen className='text-lg' />
                    <span className="ml-1"> {card?.item}</span>
                </span>
            </div>
        </div>
    );
};

SimpleTastyCard.propTypes = {
    card: PropTypes.object
};

export default SimpleTastyCard;