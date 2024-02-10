import './Profile.css'

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className="profile-container">
            <div className='image-container'>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p className='gray'>@{tag}</p>
                <p className='gray'>{location}</p>
            </div>

            <ul className="profile-list">
                {Object.entries(stats).map(([key, value], index) => (
                    <li className='profile-item' key={index}>
                        <span>{key} </span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};