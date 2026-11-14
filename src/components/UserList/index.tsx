
import { IUser } from '@/types/user'
import UserCard from '../UserCard'

interface IUserListProps {
  users: IUser[]
  editBtn: (id: number) => void
  deleteBtn: (id: number) => void
}

const UserList = ({ users, editBtn, deleteBtn }: IUserListProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            All Users
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Your registered users.
          </p>
        </div>

        <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl font-semibold">
          Total: {users.length}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            editBtn={editBtn}
            deleteBtn={deleteBtn}
          />
        ))}

      </div>

      {users.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <p className="text-slate-400 text-lg">
            No users found.
          </p>
        </div>
      )}
    </>
  )
}

export default UserList
