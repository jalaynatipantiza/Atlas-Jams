class AddColumnToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :event_picture, :string
  end
end
