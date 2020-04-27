import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper nav-header' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: require('../assets/logo-n.svg'),
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>
                    <span className='nav-new-tab'>首页</span>
                    <br />
                  </p>
                </span>
              ),
              name: 'nav-link',
            },
          ],
        },
        subItem: null,
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#',
          className: 'nav-tab',
          children: [
            {
              children: (
                <span>
                  <p className='nav-new-tab'>产品与服务</p>
                </span>
              ),
              name: 'nav-link',
            },
          ],
        },
        subItem: [
          {
            className: 'item-sub',
            name: "menu1-1",
            children: {
              className: 'item-sub-item',
              classify: '2',
              child: '物联设备',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '数据采集',
                  path:'platform',
                  id:'1'
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '物联网网关',
                  path:'platform',
                  id:'2'
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '边缘计算',
                  path:'platform',
                  id:'3'
                }
              ],
            },
          },
          {
            className: 'item-sub',
            name: "menu1-2",
            children: {
              className: 'item-sub-item',
              classify: '2',
              child: '云平台PaaS',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '物联网设备管理',
                  path:'platform',
                  id:'4'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '工业大数据管理',
                  path:'platform',
                  id:'5'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '实时大数据分析',
                  path:'platform',
                  id:'6'
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '模型管理',
                  path:'platform',
                  id:'7'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '决策引擎',
                  path:'platform',
                  id:'8'
                }
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu1-3",
            children: {
              className: 'item-sub-item',
              classify: '2',
              child:'云平台SaaS',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '智能污水管网运维平台',
                  path:'platform',
                  id:'9'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '智能二次供水泵云',
                  path:'platform',
                  id:'10'
                }
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu1-4",
            children: {
              className: 'item-sub-item',
              classify: '2',
              child:'私有云部署',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '本地部署',
                  path:'platform',
                  id:'11'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '数据服务',
                  path:'platform',
                  id:'12'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '建模服务',
                  path:'platform',
                  id:'13'
                }, {
                  name: 'content',
                  className: 'item-content',
                  children: '运维服务',
                  path:'platform',
                  id:'14'
                }
              ],
            },
          }
        ],
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#',
          className: 'nav-tab',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p className='nav-new-tab'>工业应用</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            className: 'item-sub',
            name: "menu2-1",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '污水管道',
                },
              ],
            },
          },
          {
            className: 'item-sub',
            name: "menu2-2",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '污水处理',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu2-3",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '供水管网',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu2-4",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '二次供水',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu2-5",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '化工',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu2-6",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '智能工厂',
                },
              ],
            },
          },
          {
            className: 'item-sub',
            name: "menu2-7",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '能耗管理',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p className='nav-new-tab'>平台技术</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: [
          {
            className: 'item-sub',
            name: "menu3-1",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '物联设备操作系统',
                },
              ],
            },
          },
          {
            className: 'item-sub',
            name: "menu3-2",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '工业设备协议',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-3",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '物联网协议',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-4",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '云平台',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-5",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '流数据处理',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-6",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '时序数据库',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-7",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '机器学习',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-8",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '深度学习',
                },
              ],
            },
          }, {
            className: 'item-sub',
            name: "menu3-9",
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'content',
                  className: 'item-content',
                  children: '数据孪生建模',
                },
              ],
            },
          }
        ],
      },
      {
        name: 'item4',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p className='nav-new-tab'>关于睿深</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
        subItem: null,
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: {
          className: 'banner1-text-wrapper k93k1r0b1m8-editor_css',
        },
        bg: { className: 'bg bg0 k93k3bp0lck-editor_css' },
        title: {
          className: 'banner1-title k93k1p6dhca-editor_css',
          children: (
            <span>
              <p className="banner1-title-bold">YG系列立式管道离心油泵（防爆型）</p>
            </span>
          ),
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p className="banner-text">产品简介:ISG型立式管道离心泵（可用于管道增压泵、管道加压泵），采用IS型离心泵之性能参数，在一般立式泵的基础上简化结构设计而成。根据使用温度、介质等不同在ISG型基础上派生出IRG型热水离心泵、IHG型不锈钢化工泵、YG型离心油泵。该系列产品的特点为结构紧凑，零配件种类少，使用和维修方便。</p>
            </span>
          ),
        },
        button: {
          className: 'banner1-button k93kbkiyw2-editor_css',
          children: '查看详情',
        },
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper k93k1r0b1m8-editor_css' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title k93k1p6dhca-editor_css',
          children: (
            <span>
              <p className="banner1-title-bold">ISGB型便拆立式管道泵</p>
            </span>
          )
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p className="banner-text">产品简介:ISGB型便拆立式管道泵为ISG型泵的改型。该泵主要是在ISG泵的基础上增加了加长联轴器的结构，如此改进之后的优点是：1.电机为标准轴电机，配置一些客户特殊要求的电机时比较方便；2.因为加长联轴器的存在，更换泵内部配件的时候无需挪动电机，也无需拆卸泵体和管道，可以直接在线更换，故称为“便拆式”。</p>
            </span>
          ),
        },
        // button: { className: 'banner1-button', children: 'Learn More' },
        button: {
          className: 'banner1-button k93kbkiyw2-editor_css',
          // children: (
          //   <span>
          //     <span>
          //       <p>查看详情</p>
          //     </span>
          //   </span>
          // ),
          children:'查看详情'
        }
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper k93k1r0b1m8-editor_css' },
        bg: { className: 'bg bg1' },
        title: {
          className: 'banner1-title k93k1p6dhca-editor_css',
          children: (
            (
              <span>
                <p className="banner1-title-bold">GDL系列立式多级管道泵</p>
              </span>
            )
          )
        },
        content: {
          className: 'banner1-content',
          children: (
            <span>
              <p className="banner-text">产品简介:GDL型立式多级管道离心泵吸入、排出口位于同一直线上。转子部件由轴、叶轮、叶轮挡套、轴套等零件组成，进水段、中段、出水段用拉紧螺栓联结。轴封采用机械密封，用平衡室的压力水进行润滑和冷却。是各大行业冷热水或物理化学性质类似于水等液体输送比较理想的泵型。</p>
            </span>
          ),
        },
        button: {
          className: 'banner1-button', 
          // children: (
          //   <span>
          //     <span>
          //       <p>查看详情</p>
          //     </span>
          //   </span>
          // )
          children:'查看详情'
        },
      },
    ],
  },
};
export const Feature41DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 10 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '公司优势板块-标题',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云计算强大的基础资源-副标题',
      },
    ],
  },
  img: {
    children: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587552413755&di=dcb8559d7a6a6e4d10c55f753956315b&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fbaike%2Fc0%3Dbaike60%2C5%2C5%2C60%2C20%2Fsign%3D8623ba389b25bc313f5009ca3fb6e6d4%2F4b90f603738da97792c4e9ddb251f8198718e359.jpg',
    className: 'content6-img',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        className:'intro-box',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '完备的技术体系' },
        content: {
          className: 'content6-content',
          children:
            '拥有机器人、AI引擎、虚拟现实、平台服务、系统集成等完备的核心技术体系。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '多平台硬件方案' },
        content: {
          className: 'content6-content',
          children:
            '提供不同平台工业机器人及其实验平台方案，提供从软件SDK到整体实验设计的多种方案。',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '精准的AI 引擎' },
        content: {
          className: 'content6-content',
          children:
            '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        },
      },
    ],
  },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper  content7-add-css' },
  page: { className: 'home-page content7 k93m3cy4imh-editor_css' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '公司简介板块',
        className: 'title-h1',
      },
      { name: 'content', children: '客户的微笑是我们努力的方向。以诚待人，以质取胜，无论工程大小，我们都诚意施工。我们期待获得您的信任！期待与您合作！互惠共赢' },
    ],
  },
  tabsWrapper: { className: 'content7-tabs-wrapper main-title' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'content7-tag',
          text: { children: '工厂展示', className: 'content7-tag-name' }
          // icon: { children: 'mobile' },
        },
        content: {
          className: 'content7-content edit-content-css',
          text: {
            className: 'content7-text',
            md: 13,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            children:
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587616236504&di=9691cde73d0dafd801c636a23a4097e8&imgtype=0&src=http%3A%2F%2Ffiles.cailiao.com%2Fmember%2F519093%2Fgoods%2F20191223%2F2a7129ce32d9656dd5ef1a7637469e2d.jpg',
            md: 10,
            xs: 24,
          },
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'content7-tag',
          // icon: { children: 'tablet' },
          text: { className: 'content7-tag-name', children: '研发团队' },
        },
        content: {
          className: 'content7-content edit-content-css',
          text: {
            className: 'content7-text',
            md: 13,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2403764306,4050713082&fm=26&gp=0.jpg',
          },
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'content7-tag',
          text: { children: '实地考察', className: 'content7-tag-name' }
          // icon: { children: 'laptop' },
        },
        content: {
          className: 'content7-content edit-content-css',
          text: {
            className: 'content7-text',
            md: 13,
            xs: 24,
            children: (
              <span>
                <h3>技术</h3>
                <p>
                  丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。
                </p>
                <br />
                <h3>融合</h3>
                <p>
                  解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。
                </p>
                <br />
                <h3>
                  开放
                </h3>符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。
              </span>
            ),
          },
          img: {
            className: 'content7-img',
            md: 10,
            xs: 24,
            children:
              'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587616564743&di=688fbad3010c36db04ef617cff860cd6&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1697778963%2C1330018205%26fm%3D214%26gp%3D0.jpg',
          },
        },
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        // children:
        //   'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '资质展示板块', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            // 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2533748652,1191941456&fm=26&gp=0.jpg',
            'http://localhost:3000/static/media/logo-n.81c28dc7.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            { name: 'link1', href: '#', children: '关于睿深' }
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>产品与服务</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '边缘计算' },
            { name: 'link1', href: '#', children: '决策引擎' },
            { name: 'link2', href: '#', children: '本地部署' },
            { name: 'link3', href: '#', children: '运维服务' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>工业应用</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: '污水管网' },
            { href: '#', name: 'link1', children: '污水处理' },
            { href: '#', name: 'link2', children: '供水管网' },
            { href: '#', name: 'link3', children: '二次供水' }
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>
                <span >平台技术</span>
                <br />
              </p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            { href: '#', name: 'link1', children: '云平台' },
            { href: '#', name: 'link1', children: '图数据库' },
            { href: '#', name: 'link1', children: '机器学习' },
            { href: '#', name: 'link1', children: '深度学习' }
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <p>
            <span>Copyright @2020 睿深智能科技有限公司版权所有&nbsp; &nbsp;&nbsp;</span>
            <span>浙公网安备:&nbsp; &nbsp; &nbsp;</span>
            <span>浙ICP备</span>
            <a href="#">隐私政策&nbsp;</a>|
            <a href="#">&nbsp;网站声明</a>
          </p>
        </span>
      </span>
    ),
  },
};
