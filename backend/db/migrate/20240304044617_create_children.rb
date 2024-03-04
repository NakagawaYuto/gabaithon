class CreateChildren < ActiveRecord::Migration[7.0]
  def change
    create_table :children do |t|
      t.references :parent, forreign_key: true
      t.string :name
      t.string :gender
      t.timestamps
    end
  end
end
