import { useQuery } from "@tanstack/react-query";

const fetchData = async ()=>{

    const fil = await fetch("https://jsonplaceholder.typicode.com/posts");
    return  fil.json();
};
    
const PostsComponent = () => {
    const { fetchPosts ,isError ,isLoading } = useQuery('fetchData', fetchData);

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>An Error Has Occurred</div>
    
    return ( 
        <div>
            {fetchPosts.map(item=>(<div key={item.id}></div>))}
        </div>
     );
}
 
export default PostsComponent;