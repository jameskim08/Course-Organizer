import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let courses = [
      {id: 11, name: 'Ethics in Engineering', day: [0, 4, 5], notes: ''},
      {id: 12, name: 'Calculus', day: [0], notes: ''},
      {id: 13, name: 'Linear Algebra', day: [2,3], notes: ''},
      {id: 14, name: 'Computer Science', day: [1,3,4,5,6], notes: ''},
      {id: 15, name: 'Data Structures and Algorithms', day: [0,4], notes: ''},
      {id: 16, name: 'Materials Chemistry', day: [3,4,5], notes: ''},
      {id: 17, name: 'Physics', day:[6], notes: 'hello'},
      {id: 18, name: 'Digital Computation', day:[1,6], notes: 'hello'},
      {id: 19, name: 'Microeconomics', day:[1,2,4], notes: ''},
      {id: 20, name: 'Human Factors in Design', day:[5,6,7], notes: ''}
    ];
    return {courses};
  }
}
