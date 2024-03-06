class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.integer :eldery_person_id
      t.integer :parent_id
      t.string :speaker
      t.text :message_content
      t.datetime :datetime
      t.timestamps
    end
  end
end
