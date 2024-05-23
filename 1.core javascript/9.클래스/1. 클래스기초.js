
class Dog {
  
  constructor(dogName, age) {
    this.dogName = dogName;
    this.age = age;
  }

  bark() {
    console.log(`${this.dogName}가 왈왈왈!!!`);
  }
}

const dogList = [];

const dog1 = new Dog("초코", 2);
const dog2 = new Dog("나비", 4);

dogList.push(dog1);
dogList.push(dog2);
dogList.push(new Dog("룰루", 1));

for (const d of dogList) {
  d.bark();
}

dog1.bark();
dog2.bark();