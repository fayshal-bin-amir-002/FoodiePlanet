import PropTypes from 'prop-types';

const Container = ({ children }) => {
    return (
        <div className='max-w-[1280px] w-full mx-auto px-4 md:px-8 lg:px-14 xl:px-20'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node
};

export default Container;