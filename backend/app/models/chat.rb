class Chat < ApplicationRecord
    validates :speaker, inclusion: { in: ['elderly_person', 'parent'] }
end
