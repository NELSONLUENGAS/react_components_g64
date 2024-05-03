import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegisterForm = ({ onSubmit, onChange }) => {
	return (
		<Form onSubmit={onSubmit}>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Nombre</Form.Label>
				<Form.Control
					onChange={onChange}
					name="nombre"
					type="text"
					placeholder="Ingresa un nombre"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={onChange}
					name="correo"
					type="email"
					placeholder="Enter email"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Edad</Form.Label>
				<Form.Control
					onChange={onChange}
					name="edad"
					type="number"
					min={1}
					max={100}
					placeholder="Ingresa una edad"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Cargo</Form.Label>
				<Form.Control
					onChange={onChange}
					name="cargo"
					type="text"
					placeholder="Ingresa un cargo"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label>Teléfono</Form.Label>
				<Form.Control
					onChange={onChange}
					name="telefono"
					type="tel"
					placeholder="Ingresa un tel"
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit"
			>
				Submit
			</Button>
		</Form>
	);
};
