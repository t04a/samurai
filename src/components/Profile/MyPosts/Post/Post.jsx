import styles from './Post.module.css';

function Post(props) {
  return (
    <div className={styles.item}>
      <img src='https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg' alt='' />
      <div>
        <span>{props.message} </span>
        <span>{props.likeCount} likes</span>
      </div>
    </div>
  );
}

export default Post;