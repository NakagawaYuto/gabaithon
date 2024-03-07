class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def room_reload
    ActionCable.server.broadcast('room_channel', {command: "reload"})
  end

  def room_end
    ActionCable.server.broadcast('room_channel', {command: "room_end"})
  end
end
