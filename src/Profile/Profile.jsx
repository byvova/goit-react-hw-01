import './Profile.css'

export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className="profile-container">
            <div>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className="profile-list">
                {Object.entries(stats).map(([key, value], index) => (
                    <li key={index}>
                        <span>{key}: </span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>

        </div>
    );
};