function acceptance() {
	function addProduct() {
		const companyElement = document.getElementsByName("shippingCompany")[0];
		const company = companyElement.value;

		const productNameElement = document.getElementsByName("productName")[0];
		const productName = productNameElement.value;

		const productQuantityElement = document.getElementsByName("productQuantity")[0];
		let productQuantity = productQuantityElement.value;

		const productScrapeElement = document.getElementsByName("productScrape")[0];
		const productScrape = productScrapeElement.value;

		if (company && productName && !isNaN(productQuantity) && !isNaN(productScrape)) {
			productQuantity -= productScrape;

			if (productQuantity > 0) {
				const productInfo = `[${company}] ${productName} - ${productQuantity} pieces`;

				const div = document.createElement('div');

				const p = document.createElement('p');
				p.textContent = productInfo;

				const outOfStockButton = document.createElement('button');
				outOfStockButton.textContent = "Out of stock";
				outOfStockButton.addEventListener('click', removeProduct);

				div.appendChild(p);
				div.appendChild(outOfStockButton);
				warehouse.appendChild(div);
			}
		}

		companyElement.value = "";
		productNameElement.value = "";
		productQuantityElement.value = "";
		productScrapeElement.value = "";
	}

	function removeProduct(e) {
		const parent = e.target.parentNode;
		warehouse.removeChild(parent);
	}

	const warehouse = document.getElementById("warehouse");
	const button = document.getElementById("acceptance");
	button.addEventListener('click', addProduct);
}