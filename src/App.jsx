import { useState } from 'react';
import './App.css';

import colaboradores from './database/data';
import { RegisterForm } from './components/Form';
import { TableUsers } from './components/Table';
import { Search } from './components/Search';

function App() {
	const [data, setData] = useState(colaboradores);
	const [filteredData, setFilteredData] = useState([]);

	const [form, setForm] = useState({
		id: '',
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});

	const [formState, setFormState] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = data.length + 1;
		const { nombre, correo, edad, cargo, telefono } = event.target;

		if (
			!nombre.value ||
			!correo.value ||
			!edad.value ||
			!cargo.value ||
			!telefono.value
		) {
			setFormState('Todos los campos son requeridos');
		} else {
			const formData = {
				id,
				nombre: nombre.value,
				correo: correo.value,
				edad: edad.value,
				cargo: cargo.value,
				telefono: telefono.value,
			};

			handleAddUser(formData);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleAddUser = (newUser) => {
		setData([...data, newUser]);
	};

	const handleDelete = (id) => {
		setData(data.filter((user) => user.id != id));
	};

	const handleSearch = (event) => {
		const value = event.target.value.toLowerCase();

		setFilteredData(
			data.filter((user) =>
				Object.values(user).some((userField) =>
					userField.toLowerCase().includes(value)
				)
			)
		);
	};

	return (
		<>
			<h1>APP.JSX</h1>

			<RegisterForm
				onSubmit={handleSubmit}
				onChange={handleChange}
			/>
			<Search onChange={handleSearch} />
			<TableUsers
				users={data}
				onDelete={handleDelete}
				filteredData={filteredData}
			/>
		</>
	);
}

export default App;
