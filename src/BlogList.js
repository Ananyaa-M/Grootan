import { Link } from "react-router-dom"
import './BlogList.css';
const BlogList = ({blogs}) => {
    //const blogs = Props.blogs;
    return ( 
        <div className='blog-list'>
            {blogs.map((blog)=>(
                <Link to={'/blog/'+blog.id}>
                    <div className='listElements' key={blog.key}>
                            <h3>{blog.name}</h3>
                            <p>{blog.dob}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default BlogList;