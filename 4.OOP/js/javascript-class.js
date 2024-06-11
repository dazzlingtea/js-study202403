
// 객체의 설계도 class

class Pet {

  // 생성자를 통해 필드를 선언
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 선언
  introduce(params) {
    console.log(`내 이름은 ${this.name}이고 나이는 ${this.age}🐤`);
  }

}

// 상속
class Dog extends Pet {
  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
  }
}
class Cat extends Pet {
  constructor(name, age, sleep) {
    super(name, age);
    this.sleep = sleep;
  }
}


const dog = new Dog('초코', 3, '산책가기');
console.log(dog);
const cat = new Cat('냥냥', 10, '캣타워에서 낮잠자기');
console.log(cat);

console.log(dog === cat);
console.log('======================');

dog.introduce();
cat.introduce();

