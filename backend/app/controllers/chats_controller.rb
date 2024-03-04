class ChatsController < ApplicationController
    # GET /chats
    def index
        @chats = Chat.all
        render json: @chats
    end

    # POST /chats
    def create
        @chats = Chat.new(chats_params)
        if @chats.save
            render json: @chats, status: :created
        else
            render json: @chats.errors, status: :unprocessable_entity
        end
    end

    # GET /chats/:id
    def show
        render json: @chats
    end

    # PATCH/PUT /chats/:id
    def update
        if @chats.update(chats_params)
            render json: @chats
        else
            render json: @chats.errors, status: :unprocessable_entity
        end
    end

    # DELETE /chats/:id
    def destroy
        @chats.destroy
        head :no_content
    end


    before_action :set_chats, only: [:show, :update, :destroy]

    private

    def set_chats
        @chats = Chat.find(params[:id])
    end

    def chats_params
        params.require(:chats).permit(:eldery_person_id, :parent_id, :speaker, :message_content, :datetime)
    end
end
