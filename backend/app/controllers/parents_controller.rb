class ParentsController < ApplicationController
    # GET /parents
    def index
        @parents = Parent.all
        render json: @parents
    end

    # POST /parents
    def create
        @parents = Parent.new(parents_params)
        if @parents.save
            render json: @parents, status: :created
        else
            render json: @parents.errors, status: :unprocessable_entity
        end
    end

    # GET /parents/:id
    def show
        render json: @parents
    end

    # PATCH/PUT /parents/:id
    def update
        if @parents.update(parents_params)
            render json: @parents
        else
            render json: @parents.errors, status: :unprocessable_entity
        end
    end

    # DELETE /parents/:id
    def destroy
        @parents.destroy
        head :no_content
    end


    before_action :set_parents, only: [:show, :update, :destroy]

    private

    def set_parents
        @parents = Parent.find(params[:id])
    end

    def parents_params
        params.require(:parents).permit(:name)
    end
end
