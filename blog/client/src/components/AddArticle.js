import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddArticle = () => {
    const [title, setTitle] = useState('') //hooks for inputs
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')

    const changeOnClick = e => {
        e.preventDefault()
        const articles = {
            title,
            description,
            author
        }

        setTitle('')
        setDescription('')
        setAuthor('')

        axios.post('http://localhost:8080/articles/add', articles)
            .then(res => console.log(res.data))
            .catch(err => {console.log(err)})
    }

    return(
        <AddArticleContainer>
        <div className = "container">
            <br/>
            <h1>Add New Article</h1>

        <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="author">Author Name</label>
                <input 
                    type="text" 
                    value={author}
                    onChange={e => setAuthor(e.target.value)} 
                    className="form-control" 
                    placeholder="Enter the author name"></input>
            </div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="form-control" 
                    placeholder="Enter the title of the blog"></input>
            </div>
            <div className="form-group">
                <label htmlFor="description">Content</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className="form-control" rows="3" placeholder="Type your thoughts"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Post Article</button>
            <br/>
            <br/>
        </form>
        </div>
        </AddArticleContainer>
    )
}

export default AddArticle

//Main container
const AddArticleContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;
    
    h1{
        font-weight: 900;
        color: var(--dark-green);
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover{
            background: var(--light-green);
        }
    }

    .container{
        background: var(--white);
    }
`;