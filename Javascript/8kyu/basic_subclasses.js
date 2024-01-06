// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// Human superclass
class Human {}

// Man subclass
class Man extends Human {}

// Woman subclass
class Woman extends Human {}

// God class with create method
class God {
  static create() {
    // Creating an instance of Man and Woman and returning them in an array
    return [new Man(), new Woman()];
  }
}
