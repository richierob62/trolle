json.extract! board, :id, :title, :starred, :user_id, :image, :visibility
json.members board.members do |m| m.id end
json.teams board.teams do |t| t.id end
