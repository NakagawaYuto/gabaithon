# gabaithon

DBの設定でなんかいるやつ
docker compose exec api rails db:create

マイグレーション
docker compose exec api rails db:migrate

データ追加
backend/db/seeds.rbに追加するデータを記述した後
docker compose exec api rails db:seed 