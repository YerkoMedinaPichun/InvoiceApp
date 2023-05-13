import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const FormItemsView = ({ handlerAddItems }) => {
	const [formItemsState, setFormItemsState] = useState({
		product: "",
		price: "",
		quantity: "",
	});

	const { product, price, quantity } = formItemsState;

	useEffect(() => {
		//console.log("El precio cambio!")
	}, [price]);

	useEffect(() => {
		//console.log("El formItemsState cambio!")
	}, [formItemsState]);

	const onInputChange = ({ target: { name, value } }) => {
		//console.log(name);
		console.log(value);
		setFormItemsState({
			...formItemsState,
			[name]: value, //propiedad computada
		});
	};

	const onInvoiceItemsSubmit = (e) => {
		e.preventDefault();

		if (product.trim().length <= 3) return;
		if (price.trim().length <= 1) return;
		if (isNaN(price.trim())) {
			alert("El precio debe ser un número válido");
			return;
		}

		if (quantity.trim().length < 1) return;
		if (isNaN(quantity.trim())) {
			alert("La cantidad debe ser un número válido");
			return;
		}

		handlerAddItems(formItemsState);

		setFormItemsState({
			product: "",
			price: "",
			quantity: "",
		});
	};

	return (
		<>
			<form className="w-50" onSubmit={onInvoiceItemsSubmit}>
				<input
					type="text"
					name="product"
					value={product}
					placeholder="Producto"
					className="form-control m-3"
					onChange={(e) => onInputChange(e)}
				/>
				<input
					type="text"
					name="price"
					value={price}
					placeholder="Precio"
					className="form-control m-3"
					onChange={onInputChange}
				/>
				<input
					type="text"
					name="quantity"
					value={quantity}
					placeholder="Cantidad"
					className="form-control m-3"
					onChange={onInputChange}
				/>
				<button type="submit" className="btn btn-primary m-3">
					Agregar Item
				</button>
			</form>
		</>
	);
};

FormItemsView.propTypes = {
	handlerAddItems: PropTypes.func.isRequired,
};
