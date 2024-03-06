class ChildrenController < ApplicationController
    # GET /children
    def index
        @children = Child.all
        render json: @children
    end

    # POST /children
    def create
        @children = Child.new(children_params)
        if @children.save
            render json: @children, status: :created
        else
            render json: @children.errors, status: :unprocessable_entity
        end
    end

    # GET /children/:id
    def show
        render json: @children
    end

    # PATCH/PUT /children/:id
    def update
        if @children.update(children_params)
            render json: @children
        else
            render json: @children.errors, status: :unprocessable_entity
        end
    end

    # DELETE /children/:id
    def destroy
        @children.destroy
        head :no_content
    end


    before_action :set_children, only: [:show, :update, :destroy]

    private

    def set_children
        @children = Child.find(params[:id])
    end

    def children_params
        params.require(:childrens).permit(:Parents_id, :name, :gender)
    end
end
