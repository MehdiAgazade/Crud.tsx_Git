
interface IUserFormProps {
  name: string
  surname: string
  age: string
  email: string
  setName: (value: string) => void
  setSurname: (value: string) => void
  setAge: (value: string) => void
  setEmail: (value: string) => void
  addBtn: () => void
  editId: number | null
}

const UserForm = ({
  name,
  surname,
  age,
  email,
  setName,
  setSurname,
  setAge,
  setEmail,
  addBtn,
  editId
}: IUserFormProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-7 mb-10">

      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Add New User
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Fill in the information below.
          </p>
        </div>

        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl text-xl">
          +
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        />

        <input
          type="text"
          placeholder="Last Name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        />

      </div>

      <button
        onClick={addBtn}
        className="cursor-pointer mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-7 py-3 rounded-xl transition duration-300 hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
      >
        {editId !== null ? "Update User ✏️" : "+ Add User"}
      </button>

    </div>
  )
}

export default UserForm
