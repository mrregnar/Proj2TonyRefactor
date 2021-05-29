import React from 'react'
import { StreamChat } from 'stream-chat'
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

const chatClient = StreamChat.getInstance('dz5f4d5kzrue')
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib3JhbmdlLWJsb2NrLTciLCJleHAiOjE2MjIyNDgzMjN9.J_5XaLPjRm_e9gd_ORyvas3qNBDFd3140GkeoV4SXYk'

chatClient.connectUser(
  {
    id: 'orange-block-7',
    name: 'orange',
    image: 'https://getstream.io/random_png/?id=orange-block-7&name=orange',
  },
  userToken
)

const channel = chatClient.channel('messaging', 'orange-block-7', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['orange-block-7'],
})

const OurChat = () => (
  <Chat client={chatClient} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
)

export default OurChat
