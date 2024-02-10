import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

console.log(css);

export const FriendList = () => {
    return (
        <>
            <ul>
                <li>
                    <FriendListItem></FriendListItem>
                </li>
            </ul>
        </>
    )
}