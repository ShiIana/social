import styles from './Profile.module.scss';
import Card from '../UI/Card';
import Stat from './Stat/Stat';
import PostsList from './Posts/PostsList';
import AddPost from './Posts/AddPost/AddPost';

const statInfo = {
  likes: {
    id: 1,
    counter: 42334,
    icon: <path d="M7,12.45l-5.52-5c-3-3,1.41-8.76,5.52-4.1,4.11-4.66,8.5,1.12,5.52,4.1Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
    />,
    text: 'weekly likes',
  },
  followers: {
    id: 2,
    counter: 5213,
    icon: <g>
      <circle cx={5} cy={3.75} r={2.25} fill="none" strokeLinecap="round"
              strokeLinejoin="round"/>
      <path d="M9.5,13.5H.5v-1a4.5,4.5,0,0,1,9,0Z" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M9,1.5A2.25,2.25,0,0,1,9,6" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M10.6,8.19a4.5,4.5,0,0,1,2.9,4.2V13.5H12" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>,
    text: 'weekly followers',
  },
  mentions: {
    id: 3,
    counter: 23123,
    icon: <g>
      <path d="M10.05,7A3,3,0,1,1,7,4,3,3,0,0,1,10.05,7Z" fill="none" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M10.05,7V8.3c0,3.49,5.47.2,2.6-4.54A6.59,6.59,0,0,0,7,.5,6.5,6.5,0,1,0,9.52,13" fill="none"
            strokeLinecap="round" strokeLinejoin="round"/>
    </g>,
    text: 'recent mentions',
  },
  views: {
    id: 4,
    counter: 231123,
    icon:
      <g>
        <path
          d="M13.23,6.33a1,1,0,0,1,0,1.34C12.18,8.8,9.79,11,7,11S1.82,8.8.77,7.67a1,1,0,0,1,0-1.34C1.82,5.2,4.21,3,7,3S12.18,5.2,13.23,6.33Z"
          fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx={7} cy={7} r={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>,
    text: 'recent views',
  },
}

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.stat_wrapper}>
        {
          Object.values(statInfo).map(stat => {
            return <Card key={stat.id}><Stat stat={stat}/></Card>
          })
        }
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
          <AddPost />
        </Card>

        <Card>
          <PostsList />
        </Card>
      </div>
    </section>
  );
};

export default Profile;