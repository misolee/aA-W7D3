class Api::PokemonController < ApplicationController
  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
    else
    end
  end

  def index
    @pokemon = Pokemon.all
  end

  def show
    @poke = Pokemon.find(params[:id])
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
