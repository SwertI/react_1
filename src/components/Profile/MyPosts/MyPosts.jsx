import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => (
        <Post message={post.message} likesCounts={post.likesCount} />
    ))
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name='' id='' cols='166' rows='5'></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div>New Posts</div>
            <div className={s.posts}>
                {postsElements}
                {/* <Post
                    message={posteData[0].message}
                    likesCounts={posteData[0].likesCount}
                />
                <Post
                    message={posteData[1].message}
                    likesCounts={posteData[1].likesCount}
                /> */}
            </div>
        </div>
    )
}

export default MyPosts
