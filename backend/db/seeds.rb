# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ElderlyPerson.create!(
  name: "John Doe",
  address: "123 Main St, City",
  date_of_birth: Date.new(1950, 5, 20),
  gender: "male",
  self_introduction: "Hello, I'm John Doe."
)

# 別のElderPersonのデータを追加する
ElderlyPerson.create!(
  name: "Jane Smith",
  address: "456 Elm St, Town",
  date_of_birth: Date.new(1945, 9, 10),
  gender: "female",
  self_introduction: "Hi, I'm Jane Smith."
)

# Create Parents
parent1 = Parent.create(name: "Parent 1")
parent2 = Parent.create(name: "Parent 2")

# Create Children associated with Parents
Child.create(name: "Child 1", gender: "Male", parent_id: parent1.id, age: 2)
Child.create(name: "Child 2", gender: "Female", parent_id: parent1.id, age: 3)
Child.create(name: "Child 3", gender: "Male", parent_id: parent2.id, age: 4)
Child.create(name: "Child 4", gender: "Female", parent_id: parent2.id, age: 5)


# バックエンド確認用
# Chat.create(eldery_person_id: 1, parent_id: 1, speaker:"elderly_person", message_content:"メッセージの内容", datetime:DateTime.now)
# Evaluation.create(elderly_person_id: 1, parent_id: 1, evaluation: 3)
