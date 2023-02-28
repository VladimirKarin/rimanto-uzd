function UserList({ person, setPerson }) {
    // const delHandler = () => {
    //     setPerson((p) => p.filter((p) => p.id !== person.id));
    // };
    const delHandler = () => {
        setPerson((p) => p.filter((s) => p.id !== person.id));
    };

    return (
        <ul>
            {person.map((e) => (
                <li key={e.id} style={{ color: e.color }}>
                    {' '}
                    {e.name}
                    <button onClick={delHandler}>DEL</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
