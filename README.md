## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|email_address|string|null: false|
|name|string|null: false|

### Association
- has_many :messages
- belongs_to :group, throuh: :user_groups


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|string||


### Association
- belongs_to :users
- belongs_to :groups


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group_name|string|null: false|


### Association
- has_many :messages
- has_many :users, through: :user_groups