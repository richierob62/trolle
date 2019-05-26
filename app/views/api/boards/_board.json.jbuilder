json.extract! board, :id, :title, :user_id, :visibility
json.image image_url("board_#{board.image}.jpg")
json.members board.members do |m| m.id end
json.teams board.teams do |t| t.id end
