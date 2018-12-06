json.pokemon do
  json.id @poke.id
  json.name @poke.name
  json.attack @poke.attack
  json.defense @poke.defense
  json.moves @poke.moves
  json.poke_type @poke.poke_type
  json.image_url asset_path(@poke.image_url)
  json.set! "item_ids" do
    json.array! @poke.items.ids
  end
end

json.items do 
  @poke.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end