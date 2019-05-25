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

require 'rails_helper'

RSpec.describe Board, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
