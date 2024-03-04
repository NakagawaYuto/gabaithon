# gabaithon

DBの設定でなんかいるやつ<br>
```sh
docker compose exec api rails db:create
```

マイグレーション<br>
```sh
docker compose exec api rails db:migrate
```

データ追加<br>
backend/db/seeds.rbに追加するデータを記述した後<br>
```sh
docker compose exec api rails db:seed
```

APIのURL<br>
backend/app/controllers/~contoroller.rbのコメントみてください．

### バックエンド開発時のコマンド
DB作成. [カラム名:型]はなくてもいい <br>
DB作成したらマイグレーションしてください．
```sh
docker compose exec api rails generate model [モデル名] [カラム名:型]
```

コントローラー作成<br>
モデル名がParentだったら，[モデル名の複数形]はParents<br>
```sh
docker compose exec api rails generate controller [モデル名の複数形]
```

