import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arrayinit = [];
  arrayinit.push(new ClassRoom(19));
  arrayinit.push(new ClassRoom(20));
  arrayinit.push(new ClassRoom(34));
  return arrayinit;
}
