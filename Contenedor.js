const fs = require("fs");
const { Module } = require("module");

let products = await fs.promises.readFile(filename, "utf-8");
class Contenedor{
    constructor(fileName){
        this.fileName = fileName;
    }
    
    async save(product){

        try {
            if (fs.promises.exists(this.fileName) !== false) {
                await fs.promises.writeFile(this.fileName, JSON.stringify([]));
                await fs.promises.readFile(this.fileName, "utf-8");
                products = JSON.parse(products);
                product = {... product, id:[products.length + 1]}
                products.push(product);               
            } else{
                await fs.promises.readFile(this.fileName, "utf-8");
                products = JSON.parse(products);
                product = {... product, id:[products.length + 1]}
                products.push(product);               
            }
        } catch (error) {
            console.log(error);
        }
    };

    async getById(idProduct){
        try {
            await fs.promises.readFile(this.fileName, "utf-8");
            let lookingForProduct = products.find(product => product.id == idProduct);
            console.log(lookingForProduct);

        } catch (error) {
            console.log(error);
        }

    }
        

    async getAll(){
        try {
            await fs.promises.readFile(this.fileName, "utf-8");
            let listProducts = products.map(function (product){
                return product.title
            })
            console.log(listProducts);
        } catch (error) {
            console.log(error);
        }

    }

    
    async deteleById (idProduct){
        try {
            await fs.promises.readFile(this.fileName, "utf-8");
            await fs.promises.unlink(idProduct, err => {
                if(err) throw err.message; 
            })  
            
        } catch (error) {
            return error.message            
        }

    }


    async detele(){
        try {
            await fs.promises.writeFile(filename, JSON.stringify([]));
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Contenedor