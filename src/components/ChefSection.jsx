import { Link } from 'react-router-dom';
import img from '../assets/Group 880.png';
import imgBtn from '../assets/Group 826 copy.png';

const ChefSection = () => {
    return (
        <div className='my-12 md:my-16 lg:my-20 flex flex-col-reverse lg:flex-row justify-center items-center gap-6'>
            <div className='w-full lg:w-1/2'>
                <div className='w-full lg:w-5/6'>
                    <h3 className='text-3xl lg:text-5xl mb-4 lg:mb-6'>Everyone can be a
                        chef in their own kitchen
                    </h3>
                    <p className='text-gray-500 mb-8 md:mb-10 lg:mb-12'>Empower yourself to create amazing dishes with simple ingredients. With our guidance, anyone can be a chef at home!</p>
                    <Link to={"/learn-more"}>
                        <img src={imgBtn} alt="" className='hover:scale-105 duration-500' />
                    </Link>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ChefSection;