import { Suspense } from 'react';
import MessageList from './components/message-list';
import { getMessages } from './data/getMessages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メッセージ一覧',
};

export default async function Inbox() {
  const messages = await getMessages();

  return (
    <div className='h-dvh space-y-4 overflow-y-auto p-3 pt-16'>
      <Suspense>
        <MessageList messages={messages} />
      </Suspense>
    </div>
  );
}
