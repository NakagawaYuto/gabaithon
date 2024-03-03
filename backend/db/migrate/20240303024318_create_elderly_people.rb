class CreateElderlyPeople < ActiveRecord::Migration[7.0]
  def change
    create_table :elderly_people do |t|

      t.timestamps
    end
  end
end
