
import { IUser } from '@/types/user'

interface IUserCardProps {
  user: IUser
  editBtn: (id: number) => void
  deleteBtn: (id: number) => void
}

const UserCard = ({ user, editBtn, deleteBtn }: IUserCardProps) => {
  const { id, name, surname, age, email } = user

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div className="flex items-center gap-4 mb-5">

        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-lg font-bold">
          {name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="font-bold text-slate-800">
            {name} {surname}
          </h3>

          <p className="text-xs text-slate-400">
            ID: {id}
          </p>
        </div>

      </div>

      <div className="space-y-3 text-sm">

        <div className="flex justify-between border-b border-slate-100 pb-2">
          <span className="text-slate-400">Age</span>
          <span className="font-semibold text-slate-700">
            {age}
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-slate-400">Email</span>
          <span className="font-medium text-slate-700 break-all">
            {email}
          </span>
        </div>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => editBtn(id)}
          className="cursor-pointer w-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Edit ✏️
        </button>

        <button
          onClick={() => deleteBtn(id)}
          className="cursor-pointer w-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          Delete User 🗑️
        </button>

      </div>

    </div>
  )
}

export default UserCard
