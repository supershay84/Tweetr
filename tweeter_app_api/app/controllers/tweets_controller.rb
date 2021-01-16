class TweetsController < ApplicationController

    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def create
        tweet = Tweet.new(tweet_params)

        if tweet.save
            render(status: 201, json: {status: 201, tweet: tweet})
        else
            render(status: 422, json: {tweet:tweet, errors: tweet.errors})
        end
    end

    def show
        tweet = Tweet.find(params[:id])
        render(json: { tweet: tweet })
    end

    private

    def tweet_params
        params.required(:tweet).permit(:title, :content, :author)
    end
end