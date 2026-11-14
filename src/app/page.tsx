
"use client"

import { useEffect, useState } from 'react'
import axios from 'axios'

import { IUser } from '@/types/user'

import Header from '@/components/Header'
import UserForm from '@/components/UserForm'
import UserList from '@/components/UserList'

const Middle = () => {
  const endpoint = "/db/user.json"

  const [users, setUsers] = useState<IUser[]>([])

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  const [editId, setEditId] = useState<number | null>(null)

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setUsers(res.data.users)
    })
  }, [])

  const deleteBtn = (id: number) => {
    const isAgree = confirm("Silmek istədiyinizdən əminsiniz?")

    if (isAgree) {
      setUsers(users.filter((user) => user.id !== id))

      if (editId === id) {
        setEditId(null)
        setName("")
        setSurname("")
        setAge("")
        setEmail("")
      }
    }
  }

  const addBtn = () => {
    if (name && surname && age && email) {

      if (editId !== null) {

        const editedUser: IUser = {
          id: editId,
          name,
          surname,
          age: Number(age),
          email
        }

        setUsers(users.map((user) =>
          user.id === editId ? editedUser : user
        ))

        setEditId(null)

      } else {

        const newUser: IUser = {
          id: Date.now(),
          name,
          surname,
          age: Number(age),
          email
        }

        setUsers([...users, newUser])
      }

      setName("")
      setSurname("")
      setAge("")
      setEmail("")
    }
  }

  const editBtn = (id: number) => {
    const selectedUser = users.find((user) => user.id === id)

    if (selectedUser) {
      setName(selectedUser.name)
      setSurname(selectedUser.surname)
      setAge(String(selectedUser.age))
      setEmail(selectedUser.email)

      setEditId(id)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        <Header />

        <UserForm
          name={name}
          surname={surname}
          age={age}
          email={email}
          setName={setName}
          setSurname={setSurname}
          setAge={setAge}
          setEmail={setEmail}
          addBtn={addBtn}
          editId={editId}
        />

        <UserList
          users={users}
          editBtn={editBtn}
          deleteBtn={deleteBtn}
        />

      </div>

    </div>
  )
}

export default Middle
