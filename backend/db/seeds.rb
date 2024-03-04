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

Parent.create!(
  name: "parent name"
)