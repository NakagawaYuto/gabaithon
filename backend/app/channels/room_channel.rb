class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def room_channel(data)
    ActionCable.server.broadcast('room_channel', {message: data['body']})
  end
end
