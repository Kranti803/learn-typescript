//<------------------------------TYPESCRIPT DATA TYPES---------------------------------------->

// const user: string = "kranti";
// const user1 = "kranti" as string;
// const user2 = <string>"kranti";

// const num: number = 8;
// const isTrue: boolean = true;
// const value: any = true;

//***union variables***
// const value: string | number = "hello"; //union type
//***union variables***

//<------------------------------TYPE ANNOTATIONS---------------------------------------->

//In typescript , type annotation is a way of explicitly specifying the type of a variable,
//function parameter, or a function return value.

// const myFunc = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(myFunc(5, 2));

//*** Another way of defining a function

// type Sum = (a: number, b: number) => number;
// const myFunc: Sum = (a,b) => {
//   return a + b;
// };
// console.log(myFunc(5, 2));

//<------------------------------ARRAYS IN TYPESCRIPT---------------------------------------->

// const myArr: number[] = [1, 2, 3, 4]; //array of numbers
// const myArr: string[] = ['a','b','c','d']; //array of strings

//**** Another way of defining array...
// const arr: Array<string> = ["a", "b", "c", "d"];
// const arr: Array<number> = [1,2,3,4];
// const arr: Array<string | number> = [1, 2, 3,'a','b']; //can be the array both string or numbers or comibination of both

//<------------------------------OBJECTS IN TYPESCRIPT---------------------------------------->

// const myObj: {
//   name: string;
//   age: number;
// } = {
//   name: "kranti",
//   age: 20,
// };

// console.log(myObj);

//*** another way is using 'type alis'

//Type alias in typescript allows  to create custom name for a type, making it easier to
//reuse and refer to the same type in different parts in the code
// Type alias provides better code readability, better code organization.

// type Obj = {
//   name: string;
//   age: number;
// };

// const myObj: Obj = {
//   name: "Kranti",
//   age: 20,
// };
// console.log(myObj);

// const Obj2: Obj = {
//   name: "user3",
//   age: 34,
// };
// console.log(Obj2); //error = gender is missing
//To fix this make gender as optional property as
// type Obj = {
//   name: string;
//   age: number;
//   gender?: boolean; //optional property
// };

// const Obj2: Obj = {
//   name: "user2",
//   age: 34,
// };
// console.log(Obj2); //no error

//<------------------------------INNTERFACE IN TYPESCRIPT---------------------------------------->

// In Typescript, interface allows to define a contract for an object's shape.
//It specifies the properties and their types that an obect must have to be considered that particular
//interface type.

//The main difference between type alias and interface is that the interface can be extended with another interface but not type alias.

// interface Obj {
//   height: number;
//   weight: number;
//   gender: boolean;
// }

// const myObj: Obj = {
//   height: 6,
//   weight: 60,
//   gender: true,
// };
// console.log(myObj);

// interface newObj extends Obj {
//   username: string;
//   myFunc: () => void;
// }

// const user: newObj = {
//   height: 55,
//   weight: 555,
//   gender: true,
//   username: "newUser",
//   myFunc: function () {
//     console.log(this.username);
//   },
// };
// user.myFunc()

//<------------------------------FUNCTIONS IN TYPESCRIPT---------------------------------------->

//**** optional parameter...
// type myFunc = (m: number, n: number, o?: number) => number;
// const func: myFunc = (a, b, c) => {
//   return a * b * c; //error saying ' c is possibly undefined as c is optional
// };

// const func: myFunc = (a, b, c) => {
//   if (typeof c === 'undefined') return a * b;
//   return a * b * c;
// };
// console.log(func(1,2));
// console.log(func(1,2,3));

//**** Default parameter...
// const func = (a: number, b: number, c: number = 3): number => {
//   return a * b * c;
// };
// console.log(func(1,2))

//****Rest operator.....
// type funcType = (...m: number[]) => number[];
// const myFunc: funcType = (...m) => {
//   return m;
// };
// console.log(myFunc(1, 2, 3, 4, 5));

//**** function with objects.....
// const getData = (product: {
//   name: string;
//   price: number;
//   stock: number;
// }): object => {
//   return product;
// };

// interface productType {
//   name: string;
//   price: number;
//   stock: number;
//   readonly id: number; //we cannot change id now
// }
// // const getData = (product: productType):object => { // this is incorrect function
// //   return product.name; // typescript allows it as it doesnot check for type safetyas return type is object
// // };

// const getData = (product: productType): productType => {
//   // this is correct function
//   //   return product.name; // we cannot return name, we have to return while object as is function returns type of productType (typescript doesnot allow it)
//   return product; // this is correct
// };
// // console.log(getData({ name: "Iphone", price: 5000, stock: 5, id: 1 }));

//<------------------------------CLASSES IN TYPESCRIPT---------------------------------------->

// class Player {
//   height;
//   weight;
//   constructor(height: number, weight: number) {
//     this.height = height;
//     this.weight = weight;
//   }
// }

// const player1 = new Player(45, 55);
// console.log(player1)

//****access modifiers.....
// class Player {
//   private height; //now this cannot be accessed outside the class
//   public weight; // can be accessed outside the class
//   protected power; // can be accessed within the class and inherted class
//   constructor(height: number, weight: number, power: number) {
//     this.height = height;
//     this.weight = weight;
//     this.power = power;
//   }
//   getHeight(): void {
//     console.log(this.height);
//   }
//   getPower(): void {
//     console.log(this.power);
//   }
// }
// // const player1 = new Player(7, 55, 500);

// // player1.getHeight();
// // console.log(player1.weight);

// class newPlayer extends Player {
//   special;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }

//   getPower = (): void => console.log(this.power);
// }
// const player2 = new newPlayer(7, 75, 5000, true);

// // player2.getPower();
// // console.log(player2.special);

//****** getter and setter......
// class newPlayer extends Player {
//   special;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }

//   get getMyPower(): number {
//     //getter
//     return this.power;
//   }

//   set setMyPower(val: number) {
//     //setter
//     this.power = val;
//   }
// }

// const player3 = new newPlayer(4, 50, 400, true);

// player3.getMyPower; // now no need to to call that method
// player3.setMyPower = 700;

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType, GiveId {
//   private id: string = String(Math.random() * 1000);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);
// console.log(product1);

//<------------------------------TYPE ASSERTION IN TYPESCRIPT---------------------------------------->

// type assertion is a mechanism that tells the compiler about the type of a variable.
// we use angular bracket to show type assertion' <> '

// const user1 = "kranti" as string; //type assertion using angular bracket
// const user2 = <string>"kranti"; //type assertion using 'as' keyword

// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");

// const btn = <HTMLElement>document.getElementById("btn")!; // it means btn can be something else but not null.

// const img = document.getElementById('img')as HTMLElement;
// img.src //error
// const img = document.getElementById('img')as HTMLImageElement;
// img.src // no error

//*****small dom manipulation project....

// const myForm = document.getElementById("my_form") as HTMLFormElement;
// const input = document.getElementById("form_input") as HTMLInputElement;
// const answer = document.getElementById("answer") as HTMLButtonElement;

// myForm.addEventListener("submit", (e: SubmitEvent) => {
//   e.preventDefault();
//   const data: string = input.value;
//   const number = Number(data) + 20;

//   answer.innerText = `The sum after adding 20 is ${number.toString()}`;
// });

// interface Person {
//   [key: string]: string;
// }
// const myObj: Person = {
//   name: "user",
//   email: "user@gmail.com",
// };
// const getData = (key: string): string => {
//   return myObj[key];
// };
// console.log(getData("email"));

//<------------------------------UTILITY TYPE IN TYPESCRIPT---------------------------------------->

// ****Partial<Type>.....
//=> used to make the values optional

// type User = {
//   name: string;
//   email: string;
// };
// type user2 = Partial<User> //hover over user2 to see the type of user2

// ****Required<Type>....

//=> opposite of partial

// type User = {
//   name: string;
//   email?: string;
// };
// type User2 = Required<User> //hover over user2 to see the type of user2

// ****Readonly<Type>...

//=> used to change the property into readonly(cannot be changed later)

// type User= {
//     name: string;
//     email?: string;
//   };
//   type User2 = Readonly<User> //hover over user2 to see the type of user2

// ****Record<Keys, Type>...

// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Record<"name" | "email" | "gender", string>;

//example (can be used to combine different types)

// interface UserInfo {
//   age: number;
// }
// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// ***Pick<Type, Keys>....

// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">; //hover over to see the new type

// ****Omit<Type, Keys>....
//=> opposite of Pick<Type,key >

// interface OrderInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<OrderInfo, "city">;

// ****Exclude<Type, ExcludedUnion>....

// type myUnion = number | string | boolean;
// type Random = Exclude<myUnion, number>;

// ****Extract<Type, Union>....

// type myUnion = number | string | boolean;
// type Random = Extract<myUnion, number>;

// *****NonNullable<Type>.....

// type myUnion = number | string | boolean |null | undefined;
// type Random = NonNullable<myUnion>;

// ****Parameters<Type>......

// const func = (a: string, b: string): void => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof func>;

// *****ConstructorParameters<Type>....

// class Sample {
//   constructor(public s: string, public t: string) {}
// }

// type Random = ConstructorParameters< typeof Sample>

// *****ReturnType<Type>....

// const func = (a: string, b: string)=> {
//   console.log(a + b);
// };
// type funcType = ReturnType<typeof func>

// ****InstanceType<Type>....

// class Sample {
//     constructor(public s: string, public t: string) {}
//   }

//   type Random = InstanceType< typeof Sample>

//<------------------------------ GENERICS IN TYPESCRIPT---------------------------------------->

//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//Generics makes it easier to write reusable code.

// const func = <T>(n: T): T => { // <T> means custom types
//   return n;
// };
// const ans = func(5);
// const ans2 = func('hello');
// const ans3 = func(true);

//another example.....

// type Person = {
//   name: string;
//   email: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const obj: Person = {
//   name: "kranti",
//   email: "kranti@gmail.com",
//   age: 20,
// };
// // const ans = func(obj);
// const ans = func<Person>(obj);

//another example.....

// const func = <T, U>(n: T, o: U) => {
//   return { n, o };
// };
// const ans = func<string, number>('hello',5);
// console.log(ans)

//another example.....
// const func = <T, U extends T>(n: T, o: U) => {
//   // U should be now string only
//   return { n, o };
// };
// const ans = func<string, string>("hello", "5");
// console.log(ans);

//another example.....

// type Person1 = {
//   name: string;
//   age: number;
// };
// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const func = <T, U extends T>(n: T, o: U) => {
//   return { n, o };
// };
// const ans = func<Person1, Person2>(
//   { name: "person1", age: 45 },
//   { name: "person1", age: 45, email: "person1@gmail.com" }
// );
// console.log(ans);

//another example.....

// type Person = {
//   name: string;
//   age: number;
// };

// const user: Person[] = [
//   {
//     name: "user1",
//     age: 45,
//   },
//   {
//     name: "user2",
//     age: 57,
//   },
//   {
//     name: "user3",
//     age: 55,
//   },
//   {
//     name: "user4",
//     age: 15,
//   },
// ];

// const filterUsers = <T, U extends keyof T>(
//   array: T[],
//   property: U,
//   value: T[U]
// ) => {
//   return array.filter((eachUser) => eachUser[property] === value);
// };
// const filteredUserByName = filterUsers(user, 'name', "user2");
// console.log(filteredUserByName);
