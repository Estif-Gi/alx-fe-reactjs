function UserProfile() {
    return (
      <div className=" hover:shadow-xl transition-transform duration-300 ease-in-out bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
        <img className=" hover:scale-110 rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-45 xl:h-45" src="https://via.placeholder.com/150" alt="User" />
        <h1 className=" hover:text-blue-500 transition-transform duration-300 ease-in-out text-xl text-blue-800 my-4 sm:text-lg md:text-xl xl:text-3xl lg:text-2xl">John Doe</h1>
        <p className="transition-transform duration-600 ease-in-out text-gray-600 text-base sm:text-sm md:text-base lg:text-xl xl:text-2xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;