# == Schema Information
#
# Table name: teams
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :title, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id

  has_many :team_memberships
  has_many :members, through: :team_memberships, source: :user

  has_many :shares, as: :shareable

  # SELECT "boards".* FROM "boards" INNER JOIN
  # "shares" ON "boards"."id" = "shares"."board_id"
  # WHERE "shares"."shareable_id" = $1 AND "shares"."shareable_type" = $2
  has_many :boards,
           through: :shares,
           source: :board
end
