import { useQuery } from "@tanstack/react-query";

const fetchPosts = async ()=>{

    const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    return  data.json();
};
    
const PostsComponent = () => {
    const {
        data: posts,
        error,
        isLoading,
        isError,
        refetch,} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000,}) 

    if(isLoading) return <div>Loading...</div>;
    if(isError) return <div>there is error</div>
    
    return ( 
        <div>
           <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
        </div>
     );
}
 
export default PostsComponent;