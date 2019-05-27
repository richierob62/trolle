json.extract! team, :id, :title
json.boards team.boards.map { |b| b.id }
