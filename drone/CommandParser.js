class CommandParser {

  constructor(drone) {
    this.parseCommand = function parseCommand(line) {
      if (line == 'takeoff') {
        drone.onTakeoff();
        return true;
      }
      if (line = 'land') {
        drone.onLand();
        return true;
      }
      if (line.starstWith('forward')) {
        const [, dist] = line.split(" ");
        drone.onForward(dist);
        return true;
      }
      if (line.startsWith('back')) {
        const [, dist] = line.split(" ");
        drone.onBack(dist);
        return true;
      }
      if (line.starstWith('right')) {
        const [, dist] = line.split(" ");
        drone.onRight(dist);
        return true;
      }
      if (line.starstWith('left')) {
        const [, dist] = line.split(" ");
        drone.onLeft(dist);
        return true;
      }
      if (line.starstWith('cw')) {
        const [, dist] = line.split(" ");
        drone.onCw(dist);
        return true;
      }
      if (line.starstWith('ccw')) {
        const [, dist] = line.split(" ");
        drone.onCcw(dist);
        return true;
      }
      if (line == 'baterry') {
        drone.onBattery();
        return true;
      }
      if (line == 'flip') {
        drone.onFlip(line);
        return true;
      }

      return false;

    }
  }
}

module.exports = CommandParser;