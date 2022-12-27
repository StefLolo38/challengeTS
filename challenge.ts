// challenge.ts

interface Users {
  name: string,
  age: number,
  birthday?: Date,
}

const prettyPrintWilder = (users: Users[])=> {
  users.map((user: Users) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders: Users[] = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", age: 32 };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);