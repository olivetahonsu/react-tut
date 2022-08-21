import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from 'react';


const Edit = () => {

    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);
    
  
    const history = useHistory();

    const {id} = useParams();//passing the 'id' parameter from the previous page to this

    
    //Loading content into the form for editing
    useEffect(()=>{

        fetch('http://localhost:8000/blogs/' + id)
        .then(res => res.json())
        .then((data) => {
            setTitle(data.title);
            setBody(data.body);
            setAuthor(data.author);
        })     
    },[]);


//Handling the submit event from the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
 
        setIsPending(true);
    
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
          })
          .then(()=>{
            setIsPending(false);
            history.push('/');
            })}


    return ( 
        <div className="create">
        <h2> Edit Blog </h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
            type="text"
            required
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />

            <label>Blog body:</label>
            <textarea
            required
            value={body}
            onChange={(e)=>{setBody(e.target.value)}}/>

            <label>Blog author:</label>

            <select value={author} 
            onChange={(e)=>{setAuthor(e.target.value)}}>

                <option value="mario" text="mario">mario</option>
                <option value="yoshi" text="yoshi">yoshi</option>
            </select>

            {!isPending && <button>Submit Blog</button>}
            {isPending && <button>Submitting Blog...</button>}
          </form>
    </div>
     );
}
 
export default Edit;