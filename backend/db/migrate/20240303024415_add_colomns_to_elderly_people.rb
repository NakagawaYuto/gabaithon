class AddColomnsToElderlyPeople < ActiveRecord::Migration[7.0]
  def change
    add_column :elderly_people, :name, :string
    add_column :elderly_people, :address, :string
    add_column :elderly_people, :date_of_birth, :date
    add_column :elderly_people, :gender, :string
    add_column :elderly_people, :self_introduction, :text
  end
end
