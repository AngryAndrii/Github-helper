import { StyledCard } from "./Card.styled";

function Card({ info }) {
  const {
    avatar_url,
    name,
    id,
    html_url,
    created_at,
    public_repos,
    followers,
    login,
  } = info;

  const dateOfCreate = new Date(created_at).toDateString().slice(4);

  return (
    <StyledCard>
      {info.length === 0 ? (
        <p>there is no info, please search</p>
      ) : (
        <div>
          <div>
            <img src={avatar_url} alt="user photo" width={200} />
            <p>User name: {name}</p>
            <p>User login: {login}</p>
            <p>User ID: {id}</p>
            <a className="ref" href={html_url}>
              go to user page
            </a>
            <p>date of create account: {dateOfCreate}</p>
            <p>count of public repositories: {public_repos}</p>
            <p>count of followers: {followers}</p>
          </div>
        </div>
      )}
    </StyledCard>
  );
}

export default Card;
//
