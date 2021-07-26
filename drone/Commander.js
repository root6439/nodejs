class Commander {

  constructor(socket, host, port) {
    this.socket = socket;
    this.host = host;
    this.port = port;
  }

  sendInitCommand() {
    return new Promise((resp, rej) => {
      this.socket.send('command', 0, 'command'.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendTakeOff() {
    return new Promise((resp, rej) => {
      this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendLand() {
    return new Promise((resp, rej) => {
      this.socket.send('land', 0, 'land'.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendForward(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendBack(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendRight(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`right ${distance}`, 0, `right ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendLeft(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendFlip() {
    return new Promise((resp, rej) => {
      this.socket.send('flip b', 0, 'flip b'.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  getBattery() {
    return new Promise((resp, rej) => {
      this.socket.send('baterry?', 0, 'baterry?'.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendCw(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`cw ${distance}`, 0, `cw ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

  sendCcw(distance = 20) {
    return new Promise((resp, rej) => {
      this.socket.send(`ccw ${distance}`, 0, `ccw ${distance}`.length, this.port, this.host, (err) => {
        if (err) {
          return rej(err);
        } else {
          return resp();
        }
      })
    })
  }

}

module.exports = Commander