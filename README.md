# gabaithon

DBの設定でなんかいるやつ<br>
docker compose exec api rails db:create

マイグレーション<br>
docker compose exec api rails db:migrate

データ追加<br>
backend/db/seeds.rbに追加するデータを記述した後<br>
docker compose exec api rails db:seed

APIのURL<br>
backend/app/controllers/~contoroller.rbのコメントみてください．
