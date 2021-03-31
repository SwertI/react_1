import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src='https://m.media-amazon.com/images/M/MV5BNmM1NmY4N2QtNmVkOS00MjMyLWI5ZGUtYWYxMDRjY2MzNDdiXkEyXkFqcGdeQXVyMTAwMDAwMA@@._V1_.jpg'
                    alt=''
                    srcset=''
                />
                {props.message}
                <div>
                    <span >Like</span> {props.likesCounts}
                </div>
            </div>
        </div>
    )
}

export default Post
