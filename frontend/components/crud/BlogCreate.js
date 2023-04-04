import Link from 'next/link'
import {useState, useEffect} from 'react'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import {withRouter} from 'next/router'
import {getCookie, isAuth} from '../../actions/auth'
import {getCategories} from '../../actions/category'
import {getTags} from '../../actions/tag'
import {createBlog} from '../../actions/blog'
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})
import '../../node_modules/react-quill/dist/quill.snow.css'

const CreateBlog = ({router}) => {

    const [body, setBody] = useState({})
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButon: false
    })

    const {error, sizeError, success, formData, title, hidePublishButon} = values

    const publishBlog = (e) => {
        e.preventDefault()
        console.log('ready to publish')
    }

    const handleChange = (name) => e => {
        console.log(e.target.value)
    }

    const handleBody = e => {
        console.log('e')
    }

    const createBlogForm = () => {
        return(
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input className="form-control" value={title} onChange={handleChange('title')}></input>
                </div>

                <div className="form-group">
                    <ReactQuill value={body} placeholder="Type something amazing!" onChange={handleBody}/>
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Publish</button>
                </div>
            </form>
        )
    }

    return (<div>{createBlogForm()}</div>)
}

export default withRouter(CreateBlog);