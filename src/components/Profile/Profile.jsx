import css from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profileContainer}>
            <div className={css.imageContainer}>
                <img
                    className={css.profileImage}
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p className={css.gray}>@{tag}</p>
                <p className={css.gray}>{location}</p>
            </div>

            <ul className={css.profileList}>
                {Object.entries(stats).map(([key, value], index) => (
                    <li className={css.profileItem} key={index}>
                        <span className={css.profileSpan}>{key} </span>
                        <span className={css.profileSpan}>{value}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};