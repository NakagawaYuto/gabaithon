# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# elderly_person1 = ElderlyPerson.create(
#   name: "John Doe",
#   address: "123 Main St, City",
#   date_of_birth: Date.new(1950, 5, 20),
#   gender: "male",
#   self_introduction: "Hello, I'm John Doe."
# )

# # 別のElderPersonのデータを追加する
# elderly_person2 = ElderlyPerson.create!(
#   name: "Jane Smith",
#   address: "456 Elm St, Town",
#   date_of_birth: Date.new(1945, 9, 10),
#   gender: "female",
#   self_introduction: "Hi, I'm Jane Smith."
# )

# # Create Parents
# parent1 = Parent.create(name: "Parent 1")
# parent2 = Parent.create(name: "Parent 2")

# # Create Children associated with Parents
# child1 = Child.create(name: "Child 1", gender: "Male", parent_id: parent1.id, age: 2)
# child2 = Child.create(name: "Child 2", gender: "Female", parent_id: parent1.id, age: 3)
# child3 = Child.create(name: "Child 3", gender: "Male", parent_id: parent2.id, age: 4)
# child4 = Child.create(name: "Child 4", gender: "Female", parent_id: parent2.id, age: 5)

# evaluation1 = Evaluation.create(elderly_person_id: 1, parent_id: 1, evaluation: 3)
# evaluation2 = Evaluation.create(elderly_person_id: 1, parent_id: 2, evaluation: 3)



elderly_person1 = ElderlyPerson.create(
  name: "タナカ",
  address: "SAGA",
  date_of_birth: Date.new(1955, 12, 12),
  gender: "male",
  self_introduction: "子供のお世話が大好きです・"
)

# 別のElderPersonのデータを追加する
elderly_person2 = ElderlyPerson.create!(
  name: "ぶっちー",
  address: "福岡",
  date_of_birth: Date.new(1957, 12, 12),
  gender: "female",
  self_introduction: "いつでも大歓迎です。"
)

# 別のElderPersonのデータを追加する
elderly_person3 = ElderlyPerson.create!(
  name: "タカハシメイジン",
  address: "福岡",
  date_of_birth: Date.new(1960, 12, 12),
  gender: "male",
  self_introduction: "一緒に遊びましょう"
)

# Create Parents
parent1 = Parent.create(name: "ナカガワ")
parent2 = Parent.create(name: "タカハシ")

# Create Children associated with Parents
child1 = Child.create(name: "レイ", gender: "Male", parent_id: parent1.id, age: 12)
child2 = Child.create(name: "タカヒロ", gender: "Female", parent_id: parent1.id, age: 10)

child3 = Child.create(name: "メイジン", gender: "Male", parent_id: parent2.id, age: 9)
