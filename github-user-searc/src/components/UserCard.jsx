const UserCard = ({ user }) => {
    return (
      <div className="flex items-center p-4 border rounded-lg shadow-md">
        <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      </div>
    );
  };
  
  export default UserCard;