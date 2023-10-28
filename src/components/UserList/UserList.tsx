import { useGetUsersQuery } from "../../store/api/userApi"
interface Users{
    id: string;
    firstName: string;
    lastName: string;
}

export const UserList = () =>{

    const  { data,isLoading,refetch }  = useGetUsersQuery({},{refetchOnMountOrArgChange: true});


    if (isLoading) return <div>Laddar</div>;

    return (
        <div>
            <p>User list</p>
            <button onClick={refetch}>Reaload</button>
            <ul>
                {data.map((users:Users) => {
                    return(
                        <div>{users.firstName} {users.lastName}</div>
                    )
                }) }
            </ul>
        </div>
    )
}
