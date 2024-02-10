import { FriendList } from '../FriendList/FriendList';
import './App.module.css';
import { Profile } from './Profile';


const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308
    }
};


export const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />

            <FriendList></FriendList>
        </>
    );
};