# == Schema Information
#
# Table name: shares
#
#  id             :bigint           not null, primary key
#  board_id       :integer
#  shareable_type :string
#  shareable_id   :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Share < ApplicationRecord
  validates :shareable_type, presence: true
  validates :board_id, uniqueness: { scope: [:shareable_id, :shareable_type] }

  belongs_to :shareable, polymorphic: true
  belongs_to :board
end
