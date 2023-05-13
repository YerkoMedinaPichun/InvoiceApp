import { getInvoice, calculateTotal } from "./services/getInvoice";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import InvoiceView from "./components/InvoiceView";
import ListItemsView from "./components/ListItemsView";
import TotalView from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
	id: 0,
	name: "",
	client: {
		id: 0,
		name: "",
		lastname: "",
		adress: {
			country: "",
			city: "",
			region: "",
			commune: "",
			street: "",
			number: "",
		},
	},
	company: {
		id: 0,
		name: "",
		fiscalNumber: 0,
	},
	items: [],
};

export const InvocieApp = () => {
	//-----UseState-----
	const [activeForm, setActiveForm] = useState(false);

	const [counter, setCounter] = useState(4);

	const [invoice, setInvoice] = useState(invoiceInitial);

	const [items, setItems] = useState([]);

	const [total, setTotal] = useState(0);

	const { id, name, client, company } = invoice;

	//-----UseEffect-----
	useEffect(() => {
		const data = getInvoice();
		console.log(data);
		setInvoice(data);
		setItems(data.items);
	}, []);

	useEffect(() => {
		//console.log("Los items cambiaron");
		setTotal(calculateTotal(items));

		//console.log(data);
	}, [items]);

	// const [productValue, setProductValue] = useState("");
	// const [priceValue, setPriceValue] = useState("");
	// const [quantityValue, setQuantityValue] = useState("");

	// const onProductChange = (e) => {
	// 	setProductValue(e.target.value);
	// };

	// const onPriceChange = ({ target }) => {
	// 	setPriceValue(target.value);
	// };

	// const onQuantityChange = ({ target }) => {
	// 	setQuantityValue(target.value);
	// };

	const handlerAddItems = ({ product, price, quantity }) => {
		setItems([
			...items,
			{
				id: counter,
				product: product.trim(),
				price: +price.trim(),
				quantity: parseInt(quantity.trim(), 10),
			},
		]);
		setCounter(counter + 1);
	};

	const handlerDeleteItem = (id) => {
		setItems(items.filter((item) => item.id !== id));
		console.log(id);
	};

	const onActiveForm = () => {
		setActiveForm(!activeForm);
	};

	return (
		<>
			<div className="container">
				<div className="card mt-5">
					<div className="card-header">Ejemplo de Factura</div>

					<div className="card-body">
						<InvoiceView id={id} name={name} />
						<div className="row mt-5">
							<div className="col">
								<ClientView title={"Datos del cliente"} client={client} />
							</div>
							<div className="col">
								<CompanyView title={"Datos de la empresa"} company={company} />
							</div>
						</div>
						<ListItemsView
							title={"Productos de la factura"}
							items={items}
							handlerDeleteItem={(id) => handlerDeleteItem(id)}
						/>
						<TotalView total={total} />
						<button className="btn btn-secondary" onClick={onActiveForm}>
							{!activeForm ? "Agregar Item" : "Ocultar Formulario"}
						</button>
						{/* Operador ternario simplificado */}
						{!activeForm || <FormItemsView handlerAddItems={handlerAddItems} />}

						{/* Operador ternario */}
						{/* {!activeForm ? "" : <FormItemsView handler={handlerAddItems} />} */}
					</div>
				</div>
			</div>
		</>
	);
};
