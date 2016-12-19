import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let courses = [
      {id: 11, name: 'Ethics in Engineering'},
      {id: 12, name: 'Calculus'},
      {id: 13, name: 'Linear Algebra'},
      {id: 14, name: 'Computer Science'},
      {id: 15, name: 'Data Structures and Algorithms'},
      {id: 16, name: 'Materials Chemistry'},
      {id: 17, name: 'Physics'},
      {id: 18, name: 'Digital Computation'},
      {id: 19, name: 'Microeconomics'},
      {id: 20, name: 'Human Factors in Design'}
    ];
    return {courses};
  }
}
