import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import loading_animation from '../loader2.gif'

 const Article = (props) => {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [author, setAuthor] = useState("");

    useEffect(() => {
        axios
            .get(`/articles/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setDescription(res.data.description),
                setAuthor(res.data.author)
            ])
            .catch(error => console.log(error));
    }, [props]);
     return (
             <MainContainer>
                 <div className="display">
                 {!title || !description || !author ? <img src = {loading_animation} alt="loading..." /> : 
                 <>
                 <h1>{title}</h1> 
                 <br/>   
                 <p>{description}</p>
                 <p>{author}</p>
                 <br/><br/>
                 < Link to="/" type="submit" className="btn btn-primary">Back to main</Link>
                 </>
                 }
                 </div>
             </MainContainer>
     );
 };

 export default Article

 const MainContainer = styled.div`
  margin: 6rem auto;
  padding: 3rem 14rem;

  h1 {
    text-align: center;
    font-weight:900;
    color: var(--dark-green)
  }
  img {
      width: 40rem;
      display: block;
      margin: 0 auto;
  }
  .container{
      background: var(--white)
  }
  .display{
      background-color: var(--white)
  }
`;