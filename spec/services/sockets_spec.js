describe("sockets", function() {
  var sockets;

  beforeEach(inject(["sockets", function(s) {
    sockets = s;
  }]));

  it("is an object", function() {
    sockets.should.eql({
      "navigation": {
        protocol: "udp"
      , port: 5554
      , socketID: null
      , type: "bind"
      , toDrone: false
      }
    , "video": {
        protocol: "tcp"
      , port: 5555
      , socketID: null
      , type: "connect"
      , toDrone: true
      }
    , "at": {
        protocol: "udp"
      , port: 5556
      , socketID: null
      , type: "bind"
      , toDrone: false
      }
    , "command": {
        protocol: "udp"
      , port: 5559
      , socketID: null
      , type: "connect"
      , toDrone: true
      }
    });
  });
});
