# L2-Assignment1 Blog Post

 # Q1. Differences between interfaces and types in TypeScript. 

In typeScript interface and type both are important to use.Sometime we are thinking those are same for work but they have many differences to use or work various purpose.

So,let's see the differences between them
1.
#interface mainly use for create a structure of an object.
#type are use not only for create structure of an object it also use for union, intersection,tuple etc. 
2.
#interface can extends easily also many interface can inherit at a time.
#we can extend also type use by intersection.

So, type and interface both concept are important to being a good developer.we have to much knowledge both topic for write maintainable code.


# Q2. What is the use of the keyof keyword in TypeScript? Provide an example.

Use by typeScript we can write secure and strong code.TypeScript has a beautiful (keyof)feature. This keyword can return union type of key in a object.

#why we use Keyof?
we can insure that those type of key can't use whose we are not declare in an a object.

Example:
type Person = {
    name: string;
    age: number;

}
type personKey = keyof Person
//there are output will be: "name"| 'age'

Conclusion:Keyof is a powerful feature of a type script it help us to write maintainable code it is dynamic but help us to write type-safe code.
