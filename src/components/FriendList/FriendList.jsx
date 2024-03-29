import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={css.friendList}>
                {friends.map((friend) => {
                    return (
                        <li key={friend.id}
                            className={css.friendItem}>
                            <FriendListItem
                                avatar={friend.avatar}
                                name={friend.name}
                                isOnline={friend.isOnline}
                            ></FriendListItem>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}