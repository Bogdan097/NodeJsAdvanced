console.log("HELLO Maestros,lets get started ! ");

interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }
  
  function filterByProperty(
    people: Person[],
    property: keyof Person,
    value: string | number
  ): Person[] {
    return people.filter(person => person[property] === value);
  }
  
  // People array of person 
  const peopleArray: Person[] = [
    { name: 'Cain', age: 25, gender: 'female' },
    { name: 'Marvin', age: 28, gender: 'male' },
    { name: 'Zeke', age: 30, gender: 'male' },
    { name: 'Charlie', age: 35, gender: 'male' },
    { name: 'Sasha', age: 35, gender: 'female' },
    { name: 'Donna', age: 40, gender: 'female' }
  ];
  
  const filteredByGender = filterByProperty(peopleArray, 'gender', 'male');
  console.log(filteredByGender);
  
  const filteredByAge = filterByProperty(peopleArray, 'age', 30);
  console.log(filteredByAge);
  