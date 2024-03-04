class ElderlyPeopleController < ApplicationController
    # GET /elderly_people
    def index
        @elderly_people = ElderlyPerson.all
        render json: @elderly_people
    end

    # POST /elderly_people
    def create
        @elderly_people = ElderlyPerson.new(elderly_people_params)
        if @elderly_people.save
            render json: @elderly_people, status: :created
        else
            render json: @elderly_people.errors, status: :unprocessable_entity
        end
    end

    # GET /elderly_people/:id
    def show
        render json: @elderly_people
    end

    # PATCH/PUT /elderly_people/:id
    def update
        if @elderly_people.update(elderly_people_params)
            render json: @elderly_people
        else
            render json: @elderly_people.errors, status: :unprocessable_entity
        end
    end

    # DELETE /elderly_people/:id
    def destroy
        @elderly_people.destroy
        head :no_content
    end


    before_action :set_elderly_people, only: [:show, :update, :destroy]

    private

    def set_elderly_people
        @elderly_people = ElderlyPerson.find(params[:id])
    end

    def elderly_people_params
        params.require(:elderly_people).permit(:name, :gender)
    end
end
