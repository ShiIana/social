import styles from './Profile.module.scss';
import Card from '../UI/Card';
import PostsList from './Posts/PostsList';
import AddPost from './Posts/AddPost/AddPost';
import Stats from './Stats/Stats';

const Profile = (props: any) => {
  return (
    <section className={styles.profile}>
      <div className={styles.stat_wrapper}>
        <Stats statInfo={props.statInfo}/>
      </div>

      <Card>
        <section className={styles.user_wrapper}>
          <div>
            <div className={styles.userpic_wrapper}>
              <img className={styles.userpic}
                   src="https://i.pinimg.com/originals/58/e2/fc/58e2fcb1953e131ec595c40f699bcf77.jpg" alt=""/>
            </div>
            <p className={styles.username}>Ashley Smith</p>
            <table className={styles.table}>
              <tbody>
              <tr>
                <th>Post</th>
                <th>Following</th>
                <th>Followers</th>
              </tr>
              <tr>
                <td>561</td>
                <td>935642</td>
                <td>123</td>
              </tr>
              </tbody>
            </table>
            <button className={styles.button}>Edit</button>
          </div>
          <ul className={styles.user_info}>
            <li>Birthday: <b>26.11.1990</b></li>
            <li>City: <b>California</b></li>
            <li>Web: <b>fdfdfdfd</b></li>
            <li>Education: <b>ffffdfdf</b></li>
            <li>About: <b>ffffdfdf </b></li>
          </ul>
        </section>
      </Card>
      <Card>123456</Card>

      <div className={styles.posts_wrapper}>
        <Card>
          <AddPost addPost={props.addPost}/>
        </Card>

        {
          props.posts.length > 0 && <Card>
              <PostsList posts={props.posts} removePost={props.removePost}/>
            </Card>
        }
      </div>
    </section>
  );
};

export default Profile;