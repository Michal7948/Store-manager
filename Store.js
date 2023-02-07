function init() {
    getManager();
    console.log(manager.ArrProduct);
    Products(manager.ArrProduct);
}

class Manager {
    ArrProduct
    constructor() {
        this.ArrProduct =
            [
                new Product("milk", "123", "food", 5, 5),
                new Product("skirt", "154", "clothing", 100, 57),
                new Product("chocolate", "124", "food", 10, 10),
                new Product("sugar", "1243", "food", 3, 0),
                new Product("shoes", "147", "clothing", 5, 5),
                new Product("vest", "174", "clothes", 200, 67),
                new Product("camera", "173", "electronics", 1200, 80),
                new Product("computer", "175", "electronics", 5200, 20),
                new Product("ring", "143", "jewelry", 3000, 0)
            ];
    }
    open() {
        document.getElementById("addP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";   
        document.getElementById("Uopen").style.display = "none";

    }

    addProduct() {
        const n = document.getElementById("name").value;
        const i = document.getElementById("id").value;
        const c = document.getElementById("category").value;
        const pr = document.getElementById("price").value;
        const u = document.getElementById("unitsInStock").value;
        const p = new Product(n, i, c, pr, u);
        manager.ArrProduct.push(p);
        console.log(manager.ArrProduct);
        createProduct(p);
        document.getElementById("name").value="";
        document.getElementById("id").value="";
        document.getElementById("category").value="";
        document.getElementById("price").value="";
        document.getElementById("unitsInStock").value="";
        document.getElementById("addP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";   
        document.getElementById("Uopen").style.display = "block";

    }
    openD() {
        document.getElementById("deleteP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";   
        document.getElementById("Uopen").style.display = "none";    
    }

    deleteProduct(){
        const id=document.getElementById('inputDelete').value;
        this.ArrProduct=this.ArrProduct.filter(p=>p.id!=id);
        console.log(this.ArrProduct);
        const arrFilter = document.getElementById('products');
        arrFilter.replaceChildren();
        Products(this.ArrProduct);
        document.getElementById("inputDelete").value="";
        document.getElementById("deleteP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";   
        document.getElementById("Uopen").style.display = "block";
    }

    openE() {
        document.getElementById("enterId").style.display = "none";
        document.getElementById("editP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none"; 
        document.getElementById("Sopen").style.display = "none";   
        document.getElementById("Uopen").style.display = "none";   
    }

    openId() {
        document.getElementById("enterId").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none"; 
        document.getElementById("Sopen").style.display = "none";   
        document.getElementById("Uopen").style.display = "none";   
    }

    editProduct(){
        manager.openE();
        const id=document.getElementById('inputEdit').value;
        const p=manager.ArrProduct.find(x => x.id === id);
        document.getElementById("nameE").value=p.name;
        document.getElementById("idE").value=p.id;
        document.getElementById("categoryE").value=p.category;
        document.getElementById("priceE").value=p.price;
        document.getElementById("unitsInStockE").value=p.unitsInStock;        
    }

    editProductSave(){
        const id=document.getElementById('inputEdit').value;
        const p=manager.ArrProduct.find(x => x.id === id);
        var index=this.ArrProduct.indexOf(p);
        p.name = document.getElementById("nameE").value;
        p.id = document.getElementById("idE").value;
        p.category = document.getElementById("categoryE").value;
        p.price = document.getElementById("priceE").value;
        p.unitsInStock = document.getElementById("unitsInStockE").value; 
        document.getElementById("product"+index).getElementsByClassName("name1")[0].innerHTML=p.name;
        document.getElementById("product"+index).getElementsByClassName("id1")[0].innerHTML=p.id;
        document.getElementById("product"+index).getElementsByClassName("category1")[0].innerHTML=p.category;
        document.getElementById("product"+index).getElementsByClassName("price1")[0].innerHTML=p.price;
        document.getElementById("product"+index).getElementsByClassName("unitsInStock1")[0].innerHTML=p.unitsInStock;
        document.getElementById("inputEdit").value="";
        document.getElementById("editP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";   
        document.getElementById("Uopen").style.display = "block";
    }

    openS() {
        document.getElementById("enterIdP").style.display = "none";
        document.getElementById("stockP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";   
        document.getElementById("Uopen").style.display = "none"; 
    }

    openIdP() {
        document.getElementById("enterIdP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";
        document.getElementById("Uopen").style.display = "none";    
    }

    stockProduct(){
        manager.openS(); 
    }

    addStock() {
        const id=document.getElementById('inputstock').value;
        const p=manager.ArrProduct.find(x => x.id === id);
        var index=this.ArrProduct.indexOf(p);
        var num = document.getElementById("ADStock").value;
        p.unitsInStock += Number(num);
        document.getElementById("product"+index).getElementsByClassName("unitsInStock1")[0].innerHTML=p.unitsInStock;
        document.getElementById("ADStock").value="";
        document.getElementById("inputstock").value="";
        document.getElementById("stockP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";
        document.getElementById("Uopen").style.display = "block";
    }

    deleteStock() {
        const id=document.getElementById('inputstock').value;
        const p=manager.ArrProduct.find(x => x.id === id);
        var index=this.ArrProduct.indexOf(p);

        var num = document.getElementById("ADStock").value;
        if (p.unitsInStock - num >= 0) {
            p.unitsInStock -= Number(num);
        }
        else p.unitsInStock = 0;
        document.getElementById("product"+index).getElementsByClassName("unitsInStock1")[0].innerHTML=p.unitsInStock;
        document.getElementById("ADStock").value="";
        document.getElementById("inputstock").value="";
        document.getElementById("stockP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";
        document.getElementById("Uopen").style.display = "block";
    }


    openU() {
        document.getElementById("enterIdUP").style.display = "none";
        document.getElementById("updateP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";
        document.getElementById("Uopen").style.display = "none";    
    }

    openIdUP() {
        document.getElementById("enterIdUP").style.display = "block";
        document.getElementById("Aopen").style.display = "none";
        document.getElementById("Dopen").style.display = "none";
        document.getElementById("Eopen").style.display = "none";
        document.getElementById("Sopen").style.display = "none";
        document.getElementById("Uopen").style.display = "none";    
    }

    updateP(){
        manager.openU(); 
    }

    updatePrice() {
        const id=document.getElementById('inputPrice-id').value;
        const p=manager.ArrProduct.find(x => x.id === id);
        var index=this.ArrProduct.indexOf(p);

        var price = document.getElementById("updatePrice").value;
        if (price > 0) {
            p.price = Number(price);
        }
        document.getElementById("product"+index).getElementsByClassName("price1")[0].innerHTML=p.price+"$";
        document.getElementById("updatePrice").value="";
        document.getElementById("inputPrice-id").value="";
        document.getElementById("updateP").style.display = "none";
        document.getElementById("Aopen").style.display = "block";
        document.getElementById("Dopen").style.display = "block";
        document.getElementById("Eopen").style.display = "block";
        document.getElementById("Sopen").style.display = "block";
        document.getElementById("Uopen").style.display = "block";
    }
}

class Product {
    // #name;
    // #id;
    // #category;
    // #price;
    // #unitsInStock

    constructor(name, id, category, price, unitsInStock) {
        this.name = name;
        this.id = id;
        this.category = category;
        this.price = price;
        this.unitsInStock = unitsInStock;
    }
    //#region get&set
    set setName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setId(id) {
        this.id = id;
    }

    get getId() {
        return this.id;
    }

    get getCategory() {
        return this.category;
    }

    set setCategorye(category) {
        this.category = category;
    }

    set setPrice(price) {
        this.price = price;
    }

    get getPrice() {
        return this.price;
    }

    set setUnitsInStock(unitsInStock) {
        this.unitsInStock = unitsInStock;
    }

    get getUnitsInStock() {
        return this.unitsInStock;
    }
    //#endregion

}

var manager;

function getManager() {
    if (manager == null) {
        manager = new Manager();
        // manager.constructor = null;
    }
    return manager;
}

function Products(array) {
    array.forEach(createProduct);
    if(array.length==0){
        // document.getElementById("products").innerHTML="No results";
        var noResults=document.createElement("div");
        products.appendChild(noResults);
        noResults.className="noR";
        noResults.innerHTML="No results have been found";
    }
    
}

function createProduct(product) {
    var index=manager.ArrProduct.indexOf(product);
    var newProduct = document.createElement("div");
    newProduct.className = "product";
    newProduct.id="product"+index;
    products.appendChild(newProduct);
    newProduct.innerHTML += "<b>Name:</b><span class='name1' id='name1'>" + product.name + "</span><br><br>";
    newProduct.innerHTML += "<b>Id:</b><span class='id1' id='id1'>" + product.id + "</span><br><br>";
    newProduct.innerHTML += "<b>Category:</b><span class='category1' id='category1'>" + product.category + "</span><br><br>";
    newProduct.innerHTML += "<b>Price:</b><span class='price1' id='price1'>" + product.price + "$</span><br><br>";
    newProduct.innerHTML += "<b>Units in stock:</b><span class='unitsInStock1' id='unitsInStock1'>" + product.unitsInStock + "</span><br><br>";
}

//#region Search

function cancelSearch(){
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(manager.ArrProduct); 
}

function SearchName() {
    var name = document.getElementById("SearchByName").value.toUpperCase();
    Sname = x => x.name.toUpperCase() == name;
    names = manager.ArrProduct.filter(Sname);
    console.log(names);
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(names);
}

function SearchCategory() {
    var categoryName = document.querySelector("select").value;
    if(categoryName!='all'){
        categoryS = x => x.category.toUpperCase() === categoryName.toUpperCase();
        Categories = manager.ArrProduct.filter(categoryS);
        console.log(Categories);
        const arrFilter = document.getElementById('products');
        arrFilter.replaceChildren();
        Products(Categories);
    }    
    
}

function getOption(el) {
    const option = el.value;
    console.log(option);
    // return option;
    SearchCategory(option);

}


function SearchPrice() {
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    priceS = x => x.price >= min && x.price <= max;
    prices = manager.ArrProduct.filter(priceS);
    console.log(prices);
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(prices);
}

function outStock() {
    out = x => x.unitsInStock === 0;
    outs = manager.ArrProduct.filter(out);
    console.log(outs);
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(outs);
}

function closeOutStock() {
    out = x => x.unitsInStock <= 10;
    outs = manager.ArrProduct.filter(out);
    console.log(outs);
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(outs);
}

function cancelCloseOut(){
    const arrFilter = document.getElementById('products');
    arrFilter.replaceChildren();
    Products(manager.ArrProduct); 
}

//#endregion








