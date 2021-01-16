class Tweet < ApplicationRecord
    validates :title, :content, :author, presence: true
    validates :content, uniqueness: true
end