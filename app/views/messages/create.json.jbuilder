json.user_name @message.user.name
json.content @message.content
json.created_time @message.created_at.strftime("%Y/%m/%d %H:%M")
json.img @message.image.url