export const invoice = {
	id: 1,
	name: "Componentes PC",
	client: {
		id: 1,
		name: "Yerko",
		lastname: "Medina",
		adress: {
			country: "Chile",
			city: "Santiago",
			region: "Región Metropolitana",
			commune: "Puente Alto",
			street: "Estero Leonera",
			number: "#480",
		},
	},
	company: {
		id: 1,
		name: "High Bridge",
		fiscalNumber: 1246468,
	},
	items: [
		{ id: 1, product: "CPU Intel I7", price: 499, quantity: 1 },
		{ id: 2, product: "Corsair Keyboard Mechanic", price: 150, quantity: 1 },
		{ id: 3, product: "Monitor Asus", price: 350, quantity: 1 },
	],
};
