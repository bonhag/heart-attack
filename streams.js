Streams = new Meteor.Collection("streams");

if (Meteor.isClient) {
  Template.stream_list.streams = function () {
    return Streams.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      insertStream: function(name, data) {
        Streams.insert({name: name, data: data});
        return "thx!";
      }
    });
  });
}
