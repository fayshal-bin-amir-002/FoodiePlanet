import PropTypes from 'prop-types';

const InstaPostCard = ({ post }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden h-full">
            {/* Author Section */}
            <div className="flex items-center p-4">
                <img
                    className="h-12 w-12 rounded-full object-contain bg-gray-200"
                    src="./logo.png"
                    alt="Author"
                />
                <div className="ml-4">
                    <div className="font-bold text-lg">FoodiePlanet</div>
                    <div className="text-gray-500 text-sm">2 hours ago</div>
                </div>
            </div>

            {/* Post Image */}
            <img
                className="w-full h-64 object-cover"
                src={post?.img}
                alt="Post"
            />

            {/* Post Content */}
            <div className="p-4">
                <p className="text-gray-800 mb-4">
                    {post?.title}
                </p>

                <div className="flex items-center justify-between text-gray-500">
                    <div className="flex space-x-4">
                        <button className="flex items-center space-x-1">
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                            <span>120</span>
                        </button>
                        <button className="flex items-center space-x-1">
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 4.5c4.97 0 9 3.8 9 8.5s-4.03 8.5-9 8.5c-1.11 0-2.17-.2-3.17-.57-.16-.06-.34-.03-.49.08l-3.17 2.32c-.31.23-.72-.11-.63-.48l.89-3.57c.04-.18-.01-.37-.14-.5C4.64 16.3 3 14.16 3 12c0-4.7 4.03-8.5 9-8.5m0-2C6.48 2.5 2 6.47 2 12c0 2.65 1.28 5.04 3.36 6.64l-.94 3.75c-.17.68.07 1.4.61 1.79.31.23.69.35 1.07.35.37 0 .75-.12 1.07-.35l2.84-2.08c1.02.28 2.09.45 3.18.45 5.52 0 10-3.97 10-8.5s-4.48-8.5-10-8.5z" />
                            </svg>
                            <span>45</span>
                        </button>
                    </div>
                    <small>16 August, 2023</small>
                </div>
            </div>
        </div>
    );
};

InstaPostCard.propTypes = {
    post: PropTypes.object
};

export default InstaPostCard;