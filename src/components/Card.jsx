function Card({ info }) {
  const {
    avatar_url,
    name,
    id,
    html_url,
    created_at,
    public_repos,
    followers,
  } = info;

  const dateOfCreate = new Date(created_at).toDateString().slice(4);

  return (
    <>
      {info.length === 0 ? (
        <p>there is no info, please search</p>
      ) : (
        <div>
          <div>
            <img src={avatar_url} alt="user photo" width={200} />
            <p>{name}</p>
            <p>{id}</p>
            <a href={html_url}>{html_url}</a>
            <p>{dateOfCreate}</p>
            <p>{public_repos}</p>
            <p>{followers}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
//
