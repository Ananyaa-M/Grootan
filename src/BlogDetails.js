import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './BlogDetails.css';
const BlogDetails = () => {
    const {id}= useParams();
    const [id1,setId] = useState(id);
    const [pre,setPre] = useState(true);
    const [nex,setNex] = useState(true);
    const [blog,setData] = useState(null);
    const [error,setError] = useState(null);
    const [ispending,setIsPending] = useState(true);
    useEffect(()=>{
        if(id1===1){
            setPre(false);
        }else{
            setPre(true);
        }
        fetch('http://localhost:8000/blogs/'+id1)
        .then(res=>{
            if(!res.ok){
                throw Error('No Such Resources');
            }
            const f = id1+1;
            fetch('http://localhost:8000/blogs/'+f)
            .then(res=>{
                if(!res.ok){
                    setNex(false);
                }else{
                    setNex(true);
                }
            });
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err=>{
            if(err.name === 'AbortError'){
                console.log('Aborted');
            }else{
                setError(err.message);
                setIsPending(false);
            }
        });
    },[id1]);
    const history = useHistory();
    const previousBlog = () => {
        if(id1>1){
            const f = id1-1;
            setId(f);
        }
    }
    const nextBlog = () => {
        const f = id1+1;
        setId(f);
    }
    return ( 
        <div className='Blog-details'>
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <center>
            <div className='user'>
                {blog && <div className='details'>
                    <div>{blog.name}</div>
                    <div>{blog.age}</div>
                    <div>{blog.dob}</div>
                    <div>{blog.more.address_line1}</div>
                    <div>{blog.more.address_line2}</div>
                    <div>{blog.more.address_line3}</div>
                    <div>{blog.more.phone}</div>
                </div>}
                <div className='buttons'>
                    {pre && <button onClick={previousBlog}>Previous</button>}
                    {nex && <button onClick={nextBlog}>Next</button>}
                </div>
            </div>
            </center>
        </div>
     );
}
 
export default BlogDetails;