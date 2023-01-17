const fs = require('fs')                        // Llamamos al modulo file Sytem y lo agregamos a la variable

class ProductManager {

    products 
    
    constructor(path) {
        this.path = path;
        /* this.products = [] */
        this.id = 1
    }

    async addProduct(path)

    /* async addProduct(title, description, price, thumbnail, code, stock) {

        const finderCode = this.products.find(item => item.code == code);

        if(title && description && price && thumbnail && code && stock) {
            let producto = {
                id: this.id++,          
                title,
                description,
                price,
                thumbnail,
                code,

                stock
            }
            if (finderCode) {
                console.error('Code already exists');
                return;
            }
            
            this.products.push(title && description && price && thumbnail && code && stock)
            await fs.promises.writeFile(this.producto, JSON.stringify(title && description && price && thumbnail && code && stock))



            console.log('Producto agregado con exito');
        }else {
            console.log('Validar Campos');
        }

    } */

    async getProducts() {
        let productsG = await fs.promises.readFile(this.path, 'utf-8')
        let objProducts = JSON.parse(productsG)
        console.log(objProducts); 
    }


    getProductsById(id) {
        let find = this.products.find(item => item.id == id)
        return find ? this.products[id-1] : "Not found";
    }


   
    
}



    let poductManager = new ProductManager('products.json')        // Creamos la clase product manager                

    const main = async () => {
        let product1 = {
                title: 'Venzo',
                description: 'Bike',
                price: 2000,
                thumbnail: 'asdasd',
                code: 'asdsa',
                stock: 5
        }
    }
    /* poductManager.addProduct('Titile1', 'Primer Producto', 5, 'http.img', 456, 40);
    poductManager.addProduct('Titile2', 'Segundo Producto', '10', 'http.img', 457, 60);
    poductManager.addProduct('Titile3', 'Segundo Producto', '10', 'http.img', 458, 60); */
    //await poductManager.addProduct(product1);
    //await poductManager.addProduct('Titile2', 'Segundo Producto', '10', 'http.img', 457, 60);
    poductManager.getProducts(); 
    //const finderID = poductManager.getProductsById(2);
    //console.log(finderID);