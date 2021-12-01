class Api::PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show, :update, :destroy]

  def index
    render json: Pokemon.all
  end

  def show
    render json: @pokemon
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if(@pokemon.save)
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def update
    if(@pokemon.update(pokemon_params))
      render json: @pokemon
    else
      render json: { errors: @pokemon.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @pokemon.destroy
  end

  private
  
  def pokemon_params
    params.require(:pokemon).permit(:name, :location, :move)
  end

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end
  
end
