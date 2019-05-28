# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  image      :string           not null
#  visibility :string           default("private")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  team_id    :integer
#  personal   :boolean          default(TRUE)
#

class Board < ApplicationRecord
  validates :title, :image, :visibility, presence: true

  belongs_to :owner, class_name: "User", foreign_key: :user_id
  has_many :shares

  has_many :members,
           through: :shares,
           source: :user

  belongs_to :team,
             optional: true
end
