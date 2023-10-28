import { useDeleteUserMutation } from "../../store/api/userApi";
import { Users } from "../UserList/UserList";
import styles from './DeleteUser.module.css'
import '../../App.css';

type props = {
    user: Users;
    refetch: () => void;
  };

  function DeleteUser({ user, refetch }: props) {

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async (id: string) => {
        try {
        await deleteUser(id);
        } catch (error) {
        console.log(error);
        }
        };

    return (
      <>
       <button
            className='generalButton'
            onClick={() => {
            handleDelete(user.id).then(refetch);
            }}>Delete
        </button>
      </>
    );
  }

export default DeleteUser;
