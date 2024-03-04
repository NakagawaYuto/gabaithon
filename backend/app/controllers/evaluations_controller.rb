class EvaluationsController < ApplicationController
    # GET /evaluations
    def index
        @evaluations = Evaluation.all
        render json: @evaluations
    end

    # POST /evaluations
    def create
        @evaluations = Evaluation.new(evaluations_params)
        if @evaluations.save
            render json: @evaluations, status: :created
        else
            render json: @evaluations.errors, status: :unprocessable_entity
        end
    end

    # GET /evaluations/:id
    def show
        render json: @evaluations
    end

    # PATCH/PUT /evaluations/:id
    def update
        if @evaluations.update(evaluations_params)
            render json: @evaluations
        else
            render json: @evaluations.errors, status: :unprocessable_entity
        end
    end

    # DELETE /evaluations/:id
    def destroy
        @evaluations.destroy
        head :no_content
    end


    before_action :set_evaluations, only: [:show, :update, :destroy]

    private

    def set_evaluations
        @evaluations = Evaluation.find(params[:id])
    end

    def evaluations_params
        params.require(:evaluations).permit(:elderly_person_id, :parent_id, :evaluation)
    end
end
