json.extract! team, :id, :title
json.boards team.boards { |b| b.id }
