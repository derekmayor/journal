import { getThemeConfig } from '@sugarat/theme/node'

export const blogTheme = getThemeConfig({
  // 这里的配置会合并到 themeConfig 中
  // 可以在这里配置博客特有的功能
  author: 'Derek Mayor',
  recommend: {
    showSelf: true
  },
  search: false 
})
