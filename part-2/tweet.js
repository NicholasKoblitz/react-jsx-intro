const Tweet = ({username="Tester", name="new_user", date="10/10/2020", msg="This is a test"}) => (
    <div>
        <h3>{username}</h3>
        <span>{name}</span> <span>{date}</span>
        <p>{msg}</p>
    </div>
)