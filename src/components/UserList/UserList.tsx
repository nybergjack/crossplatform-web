import { useDeleteUserMutation, useGetUsersQuery } from "../../store/api/userApi"
import DeleteUser from "../DeleteUser/DeleteUser";
import EditUser from "../EditUser/EditUser";
import styles from './UserList.module.css'
import '../../App.css';

export interface Users{
    id: string;
    firstName: string;
    lastName: string;
}

export const UserList = () =>{

    const  { data,isLoading,refetch }  = useGetUsersQuery({},{refetchOnMountOrArgChange: true});

    if (isLoading) return <div>Laddar...</div>;

    return (
        <div className={styles.container}>
            <p>User list</p>
            <button
            className='generalButton'
            onClick={refetch}>Reload</button>
            <ul>
                {data.map((users:Users) => {
                    return(
                        <div>
                            {users.firstName} {users.lastName}
                            <DeleteUser refetch={refetch} user={users} />
                            <EditUser refetch={refetch} user={users} />
                        </div>
                    )
                }) }
            </ul>
        </div>
    )
}
