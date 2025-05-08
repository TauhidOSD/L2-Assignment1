{//

    function formatString (input : string , toUpper?: boolean ): string{
       if( toUpper ?? true ){
        return input.toUpperCase()
       }else{
        return input.toLocaleLowerCase()
       }
    }

  console.log(formatString('result', true ));
  
    
      

    //

    function filterByRating (items : {title: string, rating: number }[]): {title:string, rating: number}[] {
        return items.filter(item => item.rating >=4 ); 
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ]

    console.log(filterByRating(books));



    //

    function concatenateArrays<T>(...arrays: T[][]):T[]{
        return arrays.reduce((acc, curr) => acc.concat(curr),[])
            
    }
  
    console.log(concatenateArrays(["a", "b"], ["c","d"]));
    console.log(concatenateArrays([1,2], [3],[4],[5]));
     
//

class Vehicle {
    private make: string
    private year: number

    constructor(make:string, year:number){
        this.make = make
        this.year = year
    }
     getInfo() {
        console.log (`Make ${this.make} year ${this.year}`)
    }
}

class Car extends Vehicle {
    private model: string

    constructor(make:string, year:number, model:string){
       super(make,year)
        this .model = model
    }
    getModel(){
        console.log(`model ${this.model}`);
        
    }
}

const myCar = new Car("Toyota", 2020, "Corolla")
myCar.getInfo()
myCar.getModel()


//

function processValue(value: string | number):number {
    if(typeof value ==='string'){
        return value.length;
    }else {
        return value *2
    }
}
console.log(processValue(5));


//

interface Product {
    name:string
    price: number

    }

    
    function getMostExpensiveProduct(products: Product[]):Product | null {
        if(products.length === 0 ){
            return null;
        }

        return products.reduce((max, curr)=> 
            curr.price > max.price ? curr : max)

       
    }
    const Product =[
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ]

    console.log(getMostExpensiveProduct(Product));
    

    
}