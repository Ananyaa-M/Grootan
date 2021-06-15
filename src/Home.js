import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const [blogs,ispending,error] = useFetch('http://localhost:8000/blogs');
    return ( 
        <center>
        <div className="home">
            <h1>Homepage</h1>
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div></center>
     );
}
 
export default Home;