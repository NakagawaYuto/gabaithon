class CreateEvaluations < ActiveRecord::Migration[7.0]
  def change
    create_table :evaluations do |t|
      t.references :elderly_person, forreign_key: true
      t.integer :parent_id
      t.integer :evaluation
      t.timestamps
    end
  end
end
