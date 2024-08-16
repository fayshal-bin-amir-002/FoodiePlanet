import img1 from '../assets/image 21.png';
import img2 from '../assets/image 22.png';
import img3 from '../assets/image 23.png';
import img4 from '../assets/image 24.png';
import img5 from '../assets/image 25.png';
import img6 from '../assets/Group 879.png';
import { Link } from 'react-router-dom';

const Categories = () => {

    const categoriesList = [
        { name: 'Meat', image: img1, path: "/meat" },
        { name: 'Dessert', image: img2, path: "/dessert" },
        { name: 'Lunch', image: img3, path: "/lunch" },
        { name: 'Chocolate', image: img4, path: "/chocolate" },
        { name: 'Breakfast', image: img5, path: "/breakfast" },
        { name: 'Vegan', image: img6, path: "/vegan" },
    ]

    return (
        <div className='my-12 md:my-16 lg:my-20'>
            <div className='flex justify-between items-center mb-10 md:mb-12 lg:mb-14'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>Categories</h3>
                <Link to={"/view-all-catrgories"}>
                    <button className='bg-[#e7fafe] px-5 py-3 lg:text-lg font-medium rounded-xl'>View All Catrgories</button>
                </Link>
            </div>
            <div className='flex justify-between items-center gap-8 overflow-x-auto'>
                {
                    categoriesList.map((item) => <Link key={item.name} to={item.path}>
                        <div 
                            className={`flex flex-col justify-between p-10 w-[200px] h-[200px] rounded-3xl bg-gradient-to-b from-white to-[#f2faee] hover:-translate-y-2 duration-700`}>
                            <img src={item.image} alt="" className='w-full object-cover' />
                            <h4 className='text-center mt-3 font-semibold'>{item.name}</h4>
                        </div></Link>)
                }
            </div>
        </div>
    );
};

export default Categories;