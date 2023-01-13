import user from "../data/user.json";
import Profile from "../components/Profile"
// console.log(user);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
  name={user.username}
  tag={user.tag}
  location={user.location}
  src={user.avatar}
        stats1={user.stats.followers}
        stats2={user.stats.views}
        stats3={user.stats.likes}
/>
      React homework template
    </div>
  );
};
