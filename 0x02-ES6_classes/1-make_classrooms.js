import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // craete an array list of classroom
  const classrooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  return classrooms;
}
