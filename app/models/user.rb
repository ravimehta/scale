class User < ApplicationRecord
  # t.string "first_name"
  # t.string "last_name"
  # t.string "email"
  # t.string "password_digest"

  has_secure_password

  validates :email, 
    presence: true,
    format: { with: /\S+@\S+/ },
    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 8, allow_blank: true }
end
