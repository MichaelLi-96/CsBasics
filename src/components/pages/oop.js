import React, { Component } from "react";
import "../../assets/pages.css";
import { FaStar } from "react-icons/fa";

class Oop extends Component {
  	render() {
	    return(
	    	 <div className="flex-container">
				<div className="title">Object-Oriented Programming</div>
				<div className="text-center">
					Object-oriented programming is a programming methodlogy of using objects to represent data and methods. <br/>
					These objects are then used to communicate with each other to ultimately solve a problem.
				</div>
				<div className="content">
					<div className="subtitle">What are classes and objects?</div>
					<div className="text-left">
						<FaStar className="starIcon"/>
						A class describes a set of objects with the same behavior, containing variables and methods common to all objects of that kind. 
						<mark>A class is a template for objects.</mark>
					</div>
					<div className="text-left">
						<FaStar className="starIcon"/>
						A object is a program entity that the programmer can manipulate by calling its methods. 
						<mark> An object is an instance of a class.</mark>
					</div>
					<div className="subtitle">Four Main OOP Principles</div>
					<div className="subsubtitle">Encapsulation</div>
					<div className="text-left">
						Encapsulation is the practice of keeping fields(instance variables) private, only providing methods to access and modify them.
						An objects instance variables store the data required for executing methods. This means nobody else can modify the state of
						the object without using its methods unless explicitly allowed. This helps programmers use a class without knowing its implementation 
						because the implementation details are hidden and only methods for data access are provided for use.
					</div>
					<div className="subsubtitle">Abstraction</div>
					<div className="text-left">
						Applying abstraction means that each object should only expose a high-level mechanism for using it. Programmers do not need to 
						know the underlying code and mechanisms in order to use the object. An example of this would be a man driving a car. The man
						only knows that pressing the accelerator speeds up the car and pressing the brakes will stop the car. Even though the man does not know 
						the inner mechanisms of the car and exactly how the accelerator and brake is implemented, he is still able to drive the car.
					</div>
					<div className="subsubtitle">Inheritance</div>
					<div className="text-left">
						Inheritance allows programmers to create new classes that share some or all of the attributes of existing classes. This lets 
						a new class adopt the properties of another. The inheriting class is called the subclass or child class. The original class is 
						called the superclass or parent class. The importance of inheritance is that it lets us build upon previous work without 
						reinventing the wheel. An example of this could be applied to cars. The parent class would be a car and the child classes would be
						the different types of cars such as truck, sedan, SUV, and van. Even though the types of cars are different, they are all cars 
						and inherit some of the attributes of car.
					</div>

					<div className="subsubtitle">Polymorphism</div>
					<div className="text-left">
						The definition of polymorphism is the condition of occuring in different forms. In programming, polymorphism lets programmers
						use the same word to mean different things in different contexts by utilizing method overloading and method overriding. To show an example
						of polymorphism, lets assume that we have a parent class called Shape and it contains the <code>calculateArea()</code> method. We also have
						three child classes Triangle, Circle, and Square that inherit the <code>calculateArea()</code> method from the parent Shape class. 
					</div>
					<div className="text-left">
						<FaStar className="starIcon"/>
						<mark>Method overloading</mark> is when different meanings are implied by the values of supplied variables. This means programmers are able to 
						provide two or more separate methods in a class with the same name but different arguements. However, the method return type may or may not be different.
						This allows programmers to reuse the same method name within the same class.
					</div>
					<div className="text-left">
						Using method overloading in our example, we create a new shape object <code>Shape shape = new Shape()</code>. In the Shape class, there 
						are <code>calculateArea()</code> methods for all the child classes such as <code>calculateArea(Shape triangle)</code>, <code>calculateArea(Shape circle)</code>, 
						and <code>calculateArea(Shape square)</code>. By using the <code>calculateArea()</code> method with the input type corresponding to our desired 
						shape, we can then calculate the area of that shape.

					</div>
					<div className="text-left">
						<FaStar className="starIcon"/>
						<mark>Method overriding</mark> is when different meanings are implied by the code itself. This means defining a method in a child class that 
						is already defined in the parent class with the same method name, arguements, and return type.
					</div>
					<div className="text-left">
						Using method overriding in our example, each of the children classes Triangle, Circle, and Square has their own way to calculate area 
						and define their own <code>calculateArea()</code> method. When we create a new shape object using the Triangle class 
						&nbsp;<code>Shape shape = new Triangle()</code>, calling <code>shape.calculateArea()</code> will then calculate the area of a triangle.
					</div>
				</div>
			</div>
	    );
  	}
}

export default Oop;