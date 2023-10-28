import { useState } from 'react';
import { useUpdateUserMutation } from '../../store/api/userApi';
import { Users } from '../UserList/UserList';
import { TextInput } from '../TextInput';
import styles from './EditUser.module.css'
import '../../App.css';

type props = {
  user: Users;
  refetch: () => void;
};

function EditUser({ user, refetch }: props) {

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [isEdit, setIsEdit] = useState(false);
  const [updateUser] = useUpdateUserMutation();

  const submitHandler = async () => {
    try {
      await updateUser({
        user: {
          ...user,
          firstName: firstName,
          lastName: lastName,
        },
      });
      refetch();
      setIsEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
      className='generalButton'
      onClick={() => setIsEdit(!isEdit)}>
        Redigera
      </button>

      {isEdit && (
        <div >
          <TextInput
            value={firstName}
            placeholder="Förnamn"
            onInput={(event: any) => {
              setFirstName(event.target.value);
            }}
          />
          <TextInput
            value={lastName}
            placeholder="Efternamn"
            onInput={(event: any) => {
              setLastName(event.target.value);
            }}
          />
          <button
            className={styles.editButton}
            onClick={() => {
              submitHandler();
            }}
          >
            Skicka
          </button>
        </div>
      )}
    </>
  );
}

export default EditUser;
