import pageConfApi from '../common/pageConfApi'

import pageConf from './pageConf'

const config = {

  title: '无讼法苑',

  titleSuffix: 'Blogsue',

  description: '分享，极致生活!!!',

  homePage: 'https://lvshi.cf/qablog/',

  userLinks: [

    {

      title: 'GitHub',

      icon: 'user',

      url: 'https://github.com/fydy'

    }

  ],

  /**

   * 仓库如果在用户下，填 users

   * 如果在组织下，填 orgs

   */

  userType: 'users',

  /**

   * issue 仓库所在地

   */

  user: 'fydy',

  repo: 'issue-blog',

  // 请申请一个clientID

  clientID: 'fd9d7e21fd94cfad7f4b',
  clientSecret: '72fdc1956fced6e5cabdbc2fd85c8c2ffb03d202',

  /**

   * 在本博客显示的其他issue创建者

   * 项目所有者（组织仓库的话为所有组织成员）及COLLABORATOR默认会显示

   * 主要目的是为了方式他人恶意发issue污染博客内容

   */

  otherAuthors: [''],

  /**

   * Gitalk 配置项

   * 请不要填写 owner，repo，clientID，clientSecret 字段

   * 会自动引用本config的 user，repo，clientID，clientSecret 字段以对应

   * 如何配置请访问 https://github.com/gitalk/gitalk/blob/master/readme-cn.md

   */

  gitalk: {

    distractionFreeMode: false

  },

  /**

   * 顶部状态栏的链接

   * 链接有两种属性
