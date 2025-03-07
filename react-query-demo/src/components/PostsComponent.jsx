import { useQuery } from "@tanstack/react-query";

const fetchData = async ()=>{

    const fil = await fetch("https://jsonplaceholder.typicode.com/posts");
    return  fil.json();
};
    
const PostsComponent = () => {
    const { data ,error ,isLoading } = useQuery('fetchData', fetchData);

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>An Error Has Occurred</div>
    
    return ( 
        <div>
            {data.map(item=>(<div key={item.id}></div>))}
        </div>
     );
}
 
export default PostsComponent;