export const ja = {
  title: 'TypeScript によるシンプルな i18n 実装',
  greeting: (name = '名無しの権兵衛') => `こんにちは、 ${name} さん`,
  unreadNotification: (read: number) => `未読メッセージ${read === 0 ? 'はありません' : `が ${read} 通あります`}`
}
