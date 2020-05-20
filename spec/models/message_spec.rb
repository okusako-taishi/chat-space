require 'rails_helper'

RSpec.describe Message, tyoe: :model do

  describe '#create' do
    context 'messageを保存できる場合' do
      it "contentあれば保存できる事" do
        expect(build(:message, image: nil)).to be_valid
      end

      it "imageがあれば保存できる事" do
        expect(build(:message, content: nil)).to be_valid
      end

      it "contentとimageがあれば保存できる事" do
        expect(build(:message)).to be_valid
      end
    end

    context 'messageを保存できない場合' do
      it "contentとimageが両方空だと保存できない事" do
        message = build(:message, content: nil, image: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end
    
      it "group_idが無いと保存できない事" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end

      it "user_idが無いと保存できない事" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end
    end
  end
end