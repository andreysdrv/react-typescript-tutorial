import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import EventsExample from './components/EventsExample'
import List from './components/List'
import TodoItem from './components/TodoItem'
import UserItem from './components/UserItem'
import { ITodo, IUser } from './types/types'

const App = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		getUsers()
		getTodos()
	}, [])

	const getUsers = async () => {
		try {
			const responce = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users'
			)
			setUsers(responce.data)
		} catch (error) {
			alert(error)
		}
	}

	const getTodos = async () => {
		try {
			const responce = await axios.get<ITodo[]>(
				'https://jsonplaceholder.typicode.com/todos?_limit=15'
			)
			setTodos(responce.data)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div>
			<Card variant={CardVariant.outlined} width='100%' height='auto'>
				<EventsExample />
			</Card>
			<List
				items={users}
				renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
			/>
			<List
				items={todos}
				renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	)
}

export default App
