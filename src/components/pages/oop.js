import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter";
import { androidstudio } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "../../assets/css/pages.css";
import { FaStar } from "react-icons/fa";

const classExample =
`// A car class that stores the model, color, and milesDriven
// of a car object
public class Car {
	// instance variables or class variables
	private String model;
	private String color;
	private int milesDriven;

	// constructor 
	// The constructor is where you set up all your class variables
	// The constructor name is always the same as your class name
	// This is what is called upon when you create a new Car object
	publc Car(String model, String color) {
		this.model = model;
		this.color = color;
		milesDriven = 0;
	}
	
	// accessors methods (getters)
	// Returns the current model of the car
	public String getModel() {
		return model;
	}
	// Returns the current color of the car
	public String getColor() {
		return color;
	}
	// Returns the current amount of miles the car has driven
	public int getMilesDriven() {
		return milesDriven;
	}

	// mutators methods (setters)
	// Sets the color of the car to a new color
	public void setToNewColor(String newColor) {
		color = newColor;
	}
	// Add miles drove to the total amount of miles driven
	public void drive(int milesDrove) {
		milesDriven = milesDriven + milesDrove;
	}
}`;
		const objectExample =
`// A car tester class where we can create car objects and test its 
// methods
public class CarTester {
    // This is our main function where our code will run
    public static void main(String[] args) {
    	// This creates a new car object with the model "Truck"
    	// and color "Blue"
    	Car myCar = new Car("Truck", "Blue");

    	// Store the color of the myCar object in a String called color
    	String color = myCar.getColor();
    	// This will print out "Blue"
    	System.out.println(color);

    	// Set the color of the myCar object to white
    	myCar.setToNewColor("White");
    	color = myCar.getColor();
    	//This will now print out "White"
    	System.out.println(color);
    }
}`;

class Oop extends Component {
	componentDidMount() {
	  window.scrollTo(0, 0);
	}

	componentDidUpdate() {
		window.scrollTo(0, 0);
	}
	
  	render() {
	    return(
	    	 <div className="flex-container">
				<div className="title">Object-Oriented Programming</div>
				<div className="text-center">
					Object-oriented programming is a programming methodlogy of using objects to represent data and methods. <br/>
					These objects are then used to communicate with each other to ultimately solve a problem.
				</div>
				<div className="content">
					<div className="subtitle-left">What makes up an object-oriented program?</div>
					<div className="subsubtitle-left">Classes</div>
					<div className="text-left">
						A class describes a set of objects with the same behavior, containing variables and methods common to all objects of that kind. 
						<mark>A class is a template for objects.</mark>
					</div>
					<div className="subsubtitle-left">Objects</div>
					<div className="text-left">
						An object is a program entity that the programmer can manipulate by calling methods of the objects class. 
						<mark> An object is an instance of a class.</mark>
					</div>
					<div className="subsubtitle-left">Methods</div>
					<div className="text-left">
						A method is a set of code statements that performs a specific task. All methods can fall under the accessor or mutator category. <br/>
						<br/>
						<FaStar className="starIcon"/>
						<mark>Accessor methods</mark> do not change the internal data of the invoked object and retrieves the objects data. Accessor methods return 
						a data type back to the caller which is why they are also called getter methods.<br/>

						<FaStar className="starIcon"/>
						<mark>Mutator methods</mark> change the internal data of the invoked object. Mutator methods use the <code>void</code> keyword to return 
						nothing back to the caller which is why they are also called setter methods.
					</div>
					<Container fluid>
						<Row>
							<Col>
								<Row style={{ justifyContent:"center" }}>
									<div className="subsubtitle-center">Creating an example car class</div>
								</Row>
								<Row>
									<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
										{classExample}
									</SyntaxHighlighter>
								</Row>
							</Col>
							<Col>
								<Row style={{ justifyContent:"center" }}>
									<div className="subsubtitle-center">Creating an car object using the car class</div>
								</Row>
								<Row>
									<SyntaxHighlighter language="java" showLineNumbers style={androidstudio} className="code-text">
										{objectExample}
									</SyntaxHighlighter>	
								</Row>
							</Col>
						</Row>
						<br />
						<br />
					</Container>
					<div className="subtitle-left">Four Main OOP Principles!</div>
					<div className="subsubtitle-left">Encapsulation</div>
					<div className="text-left">
						Encapsulation is the practice of keeping fields(instance variables) private, only providing methods to access and modify them.
						An objects instance variables store the data required for executing methods. This means nobody else can modify the state of
						the object without using its methods unless explicitly allowed. This helps programmers use a class without knowing its implementation 
						because the implementation details are hidden and only methods for data access are provided for use.
					</div>
					<div className="subsubtitle-left">Abstraction</div>
					<div className="text-left">
						Applying abstraction means that each object should only expose a high-level mechanism for using it. Programmers do not need to 
						know the underlying code and mechanisms in order to use the object. An example of this would be a man driving a car. The man
						only knows that pressing the accelerator speeds up the car and pressing the brakes will stop the car. Even though the man does not know 
						the inner mechanisms of the car and exactly how the accelerator and brake is implemented, he is still able to drive the car.
					</div>
					<div className="subsubtitle-left">Inheritance</div>
					<div className="text-left">
						Inheritance allows programmers to create new classes that share some or all of the attributes of existing classes. This lets 
						a new class adopt the properties of another. The inheriting class is called the subclass or child class. The original class is 
						called the superclass or parent class. The importance of inheritance is that it lets us build upon previous work without 
						reinventing the wheel. An example of this could be applied to cars. The parent class would be a car and the child classes would be
						the different types of cars such as truck, sedan, SUV, and van. Even though the types of cars are different, they are all cars 
						and inherit some of the attributes of car.
					</div>
					<div className="subsubtitle-left">Polymorphism</div>
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