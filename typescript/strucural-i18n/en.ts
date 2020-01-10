
export const en = {
  title: 'Simple i18n implementation with TypeScript',
  greeting: (name = 'John Doe') => `Hello, ${name}.`,
  unreadNotification: (read: number) => `You have ${read === 0 ? 'no' : read} unread message${read === 1 ? '' : 's'}.`,
}
