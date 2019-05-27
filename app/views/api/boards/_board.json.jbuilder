json.extract! board, :id, :title, :user_id, :visibility
json.image image_url("board_#{board.image}.jpg")
json.members board.members.map { |m| m.id }
json.teams board.teams.map { |t| t.id }
