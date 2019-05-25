# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  starred    :boolean          default(FALSE)
#  user_id    :integer          not null
#  image      :string           not null
#  visibility :string           default("private")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
  validates :title, :image, :visibility, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id
  has_many :shares

  # SELECT "users".* FROM "users"
  # INNER JOIN "shares" ON "users"."id" = "shares"."shareable_id"
  # WHERE "shares"."board_id" = $1 AND "shares"."shareable_type" = $2
  has_many :members,
           through: :shares,
           source: :shareable,
           source_type: "User"

  has_many :teams,
           through: :shares,
           source: :shareable,
           source_type: "Team"
end
