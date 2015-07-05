Meteor.startup(function() {


  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  Channels.remove({});
  Channels.insert({
    name: "world"
  });
  Channels.insert({
    name: "individuated"
  });
});
