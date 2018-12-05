json.array! @parties.each do |party|
  json.name party.name
  json.guests party.guests.each do |guest|
    json.name guest.name
  end
  
end