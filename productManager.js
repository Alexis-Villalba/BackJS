class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Valida que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Valida que el código no se repita
        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con este código");
            return;
        }

        const product = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(product);
        console.log("Producto agregado:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}

// Ejemplo de uso:
const manager = new ProductManager();

manager.addProduct("Remera", "Remera de algodón", 25.99, "remera.jpg", "12368", 40);
manager.addProduct("Pantalón", "Pantalón jogger", 39.99, "pantalon.jpg", "54981", 30);

console.log(manager.getProducts());

console.log(manager.getProductById(1)); // Producto existente
console.log(manager.getProductById(3)); // Producto no encontrado