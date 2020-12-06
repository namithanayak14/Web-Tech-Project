import React, {useState} from 'react'
import styled from 'styled-components'
import loading_animation from './../loader2.gif'
import {Link} from 'react-router-dom'
import axios from 'axios';

//prints expected format.

const Articles = ({posts}) => {
    const [article, setArticle] =useState([]);
    //delete article 
    const deleteArticle = id => {
        axios.delete(`/articles/${id}`)
        .then(res => alert(res.data))
        setArticle(article.filter(elem => elem._id !== id));
    }
    return(
        <MainContainer>
            {!posts.length ? (<img src={loading_animation} alt="Loading..."></img>):(
                posts.map((article, key) => (
                <div className="container" key={key}>
                    <br/>
                    <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                    <h1>{article.title}</h1>
                    </Link>
                    <h6>{article.createdOnDate}</h6>
                    <p>{article.description}</p>
                    <span className="badge badge-secondary p-2">{article.author}</span>
                    <div className="row my-5">
                        <div className="col-sm-2">
                            <Link to={`/update/${article._id}`} className="btn btn-outline-success">Edit Article</Link>
                        </div>    
                        <div className="col-sm-2">
                            <button onClick={() => deleteArticle(article._id)} className="btn btn-outline-danger">Delete Article</button>
                        </div>                      
                    </div>
                    <hr/>
                </div>)
            ))}
        </MainContainer>
    )
}

export default Articles

//Main container
const MainContainer = styled.div`
    margin: 7rem 0;

    img {
        width: 40rem;
        display: block;
        margin: 0 auto;
    }
    .container{
        background: var(--white)
    }

`;