(self["webpackChunk_next_dev_docs"]=self["webpackChunk_next_dev_docs"]||[]).push([[275],{68926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});n(18127);var i=n(19203),r=(n(47540),n(71829)),o=(n(79951),n(70311)),l=(n(21785),n(80190)),a=(n(9237),n(10593)),s=n(414),d=n(21198),c=n(43017),m=n(81606),u=n(96832),p=n(20476);function h(e=!1){const t=p||{},n=t.enable,i=t.disable,r=t.exportGeneratedCSS,o=t.setFetchMethod,l=(0,u.useState)(e),a=(0,s.Z)(l,2),d=a[0],c=a[1],m={brightness:100,contrast:90,sepia:10},h={invert:[],css:"",ignoreInlineStyle:[".react-switch-handle"],ignoreImageAnalysis:[],disableStyleSheetsProxy:!0};(0,u.useEffect)((()=>{if("undefined"!==typeof window&&"undefined"!==typeof window.matchMedia)return p?(o(fetch),d?n(m,h):i(),()=>{i()}):()=>null}),[d]);const g=(0,u.useMemo)((()=>{const e=()=>c((e=>!e));return{toggle:e,collectCSS:r}}),[d]);return[d,g]}var g=n(11019),f=n(58138);const y=()=>{const e=(0,u.useMemo)((()=>{var e;return(0,c.isBrowser)()?(null===(e=matchMedia)||void 0===e?void 0:e("(prefers-color-scheme: dark)").matches)&&"dark":"light"}),[]),t=(0,u.useMemo)((()=>(0,c.isBrowser)()?localStorage.getItem("procomponents_dark_theme")||e:"light"),[]),n=e=>{try{const t=document.getElementsByTagName("meta")["theme-color"];t.setAttribute("content",e?"#242525":"#1890ff")}catch(t){}},i=h("dark"===t),r=(0,s.Z)(i,2),o=r[0],l=r[1].toggle;return(0,u.useEffect)((()=>{n(o)}),[o]),(0,c.isBrowser)()?(0,f.jsx)(a.Z,{checkedChildren:"\ud83c\udf1c",unCheckedChildren:"\ud83c\udf1e",defaultChecked:"dark"===t,checked:o,onChange:e=>{l(),e?localStorage.setItem("procomponents_dark_theme","dark"):localStorage.setItem("procomponents_dark_theme","light")}}):null},v=({children:e,...t})=>((0,u.useEffect)((()=>{if(!(0,c.isBrowser)())return null}),[]),(0,f.jsx)(i.ZP,{locale:d.Z,children:(0,f.jsx)(m.Z,{...t,children:(0,f.jsxs)(g.iV,{value:{intl:g.d8,valueTypeMap:{}},children:[(0,f.jsxs)(r.Z,{title:" Drawer",placement:"right",size:"large",extra:(0,f.jsx)(o.Z,{children:(0,f.jsx)(l.Z,{type:"primary",children:"OK"})}),children:[(0,f.jsx)("p",{children:"Some contents..."}),(0,f.jsx)("p",{children:"Some contents..."}),(0,f.jsx)("p",{children:"Some contents..."})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{children:e},"children"),(0,f.jsx)("div",{style:{position:"fixed",right:8,top:0,zIndex:999,display:"flex",alignItems:"center"},className:"procomponents_dark_theme_view",children:(0,c.isBrowser)()?(0,f.jsx)(y,{}):null},"procomponents_dark_theme_view")]})]})})}));var k=v},25925:function(e,t,n){"use strict";n.r(t);var i=n(58138);t["default"]=({children:e,location:t,...n})=>t.pathname.startsWith("/~demos/layout")?e:(0,i.jsx)("div",{style:{padding:24},children:(0,i.jsx)("div",{style:{padding:24,border:"1px solid #f0f0f0"},children:e})})},52982:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"Next Dev - Super Front-end ecosystems","meta":{"order":10}}],"/antd-components":[{"title":"Display","path":"/antd-components/display/button","meta":{},"children":[{"path":"/antd-components/display/button/button","title":"Authentication","meta":{}}]},{"path":"/antd-components/getting-started","title":"Getting Started","meta":{}}],"/components":[{"title":"Introduction","children":[{"path":"/components/getting-started","title":"Getting Started"}]},{"title":"Display","children":[{"path":"/components/display/button/button","title":"Button"}]},{"title":"Card","children":[{"path":"/components/card/blog/blog","title":"Blog1"}]},{"title":"Navigation","children":[{"path":"/components/navigation/top","title":"Top Navigation"}]}],"/introduce":[{"title":"Introduce","children":[{"path":"/introduce/introduce","title":"Introduction"},{"path":"/introduce/philosophy","title":"Design ideas"},{"path":"/introduce/contributing","title":"Participate in contribution"}]}],"/utils":[{"title":"Security","children":[{"path":"/utils/authority","title":"Authority"},{"path":"/utils/crypto","title":"Crypto"},{"path":"/utils/constant","title":"Constants"},{"path":"/utils/store","title":"Store"},{"path":"/utils/common","title":"Common utils"}]},{"title":"Validation","children":[{"path":"/utils/validation/regex","title":"Regex"}]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"Introduce","path":"/introduce"},{"title":"Components","path":"/components"},{"title":"Antd Components","path":"/antd-components"},{"title":"Utils","path":"/utils"},{"title":"Credit","path":"https://github.com/next-dev-team/awesome-tailwind"}]},"title":"Next Dev","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}'),r=n(43017),o='import { Fragment } from \'react\';\nimport { Login1 } from \'antd-ui/src\';\nconst DemoButton = () => {\n  const renderComponent = [\n    {\n      title: \'Primary\',\n      render: (\n        <Login1\n          onFinish={async (values) => {\n            alert(JSON.stringify(values, null, 2));\n          }}\n          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"\n          title="Github"\n          subTitle="World\'s Largest Gay Dating Site"\n        />\n      ),\n    },\n  ];\n\n  return (\n    <div className="flex flex-wrap items-center justify-center gap-4">\n      {renderComponent.map((item, key) => (\n        <Fragment key={key}>\n          {item?.divider && <hr className="w-full border-b border-gray-200" />}\n          {item.render}\n        </Fragment>\n      ))}\n    </div>\n  );\n};\n\nexport default DemoButton;',l="import { Fragment } from 'react';\nimport { Blog1 } from 'ui/src';\nconst DemoButton = () => {\n  const renderComponent = [\n    {\n      title: 'Primary',\n      render: <Blog1 />,\n    },\n  ];\n\n  return (\n    <div className=\"flex flex-wrap items-center gap-4\">\n      {renderComponent.map((item, key) => (\n        <div key={key} className=\"w-80\">\n          {item.divider && <hr className=\"w-full border-b border-gray-200\" />}\n          {item.render}\n        </div>\n      ))}\n    </div>\n  );\n};\n\nexport default DemoButton;",a='import { CodeOutlined, LeftOutlined, RightOutlined } from \'@ant-design/icons\';\nimport { Modal, notification, Space } from \'antd\';\nimport { showCodeMode } from \'@/helper\';\nimport { Fragment } from \'react\';\nimport { Button } from \'ui/src\';\nimport { useHyperuiBtn } from \'./hyperui_btn\';\nimport { tailusButton } from \'./tailus\';\n\nconst DemoButton = () => {\n  const renderComponent = [\n    {\n      title: \'Primary\',\n      render: <Button title="Primary" />,\n    },\n    {\n      title: \'Primary Rounded\',\n      render: <Button title="rounded" shape="rounded" />,\n    },\n    {\n      title: \'Primary Disabled\',\n      render: <Button title="disabled" isDisabled />,\n    },\n    {\n      title: \'left Icon\',\n      render: <Button title="left Icon" leftIcon={<LeftOutlined />} />,\n    },\n    {\n      title: \'right Icon\',\n      render: <Button title="right Icon" rightIcon={<RightOutlined />} />,\n    },\n    {\n      title: \'Icon End\',\n      render: (\n        <Button\n          title="Icon End"\n          rightIcon={<RightOutlined className="absolute right-1.5" />}\n        />\n      ),\n    },\n    {\n      title: \'Outline Rounded\',\n      render: (\n        <Button variant="outline" title="Outline Rounded" shape="rounded" />\n      ),\n    },\n\n    {\n      title: \'Primary outline\',\n      render: <Button variant="outline" title="Outline" />,\n    },\n\n    {\n      title: \'link\',\n      render: <Button variant="link" title="link" />,\n    },\n    {\n      title: \'link\',\n      render: (\n        <Button\n          variant="link"\n          textTransform="uppercase"\n          title="link with icon"\n          rightIcon={<RightOutlined className="absolute right-1.5" />}\n        />\n      ),\n    },\n    {\n      title: \'outline Block\',\n      render: <Button variant="outline" title="Outline Block " isFull />,\n    },\n    {\n      title: \'success\',\n      divider: true,\n      render: <Button title="success" color="success" />,\n    },\n    {\n      title: \'dark\',\n      render: <Button title="dark" color="dark" />,\n    },\n    {\n      title: \'light\',\n      render: <Button title="light" color="light" />,\n    },\n    ...useHyperuiBtn(),\n    ...tailusButton(),\n  ];\n  // const [se,]= useModal()\n\n  return (\n    <div className="flex flex-wrap items-center gap-4">\n      {renderComponent.map((item, key) => (\n        <Fragment key={key}>\n          {item.divider && (\n            <>\n              <div className="w-full capitalize">{item.title}</div>\n              <hr className="w-full border-b border-gray-200" />\n            </>\n          )}\n\n          {item.render}\n          <div\n            className="relative flex items-center gap-1 text-gray-500 cursor-pointer right-3 bottom-3 hover:text-pink-500"\n            onClick={() => {\n              showCodeMode({\n                render: item.render,\n                title: item.title,\n              });\n            }}\n          >\n            <CodeOutlined className="text-pink-600" />\n            code\n          </div>\n        </Fragment>\n      ))}\n    </div>\n  );\n};\n\nexport default DemoButton;',s="import { showCodeMode } from '@/helper';\nimport { CodeOutlined } from '@ant-design/icons';\nimport { Button, Collapse, Space, Typography } from 'antd';\nimport { Fragment } from 'react';\nimport { hyperNavUi } from './hyperui';\nimport { KometaNav } from './kometa';\nimport { TailBlocksNav } from './tailblocks';\n\nconst DemoButton = () => {\n  const renderComponent: {\n    title: string;\n    link: string;\n    item: any[];\n  }[] = [\n    {\n      title: 'Tail Blocks & flowrift',\n      link: '',\n      item: TailBlocksNav,\n    },\n    {\n      title: 'Kometa Navs',\n      link: '',\n      item: KometaNav,\n    },\n\n    {\n      title: 'Hyper Nav UI',\n      link: '',\n      item: hyperNavUi,\n    },\n  ];\n\n  return (\n    <Collapse accordion defaultActiveKey=\"1\">\n      {renderComponent.map((menuItem, key) => {\n        return (\n          <Collapse.Panel\n            header={<Button type=\"link\">{menuItem.title}</Button>}\n            key={String(key + 1)}\n            extra={\n              <Space>\n                <Button type=\"link\" target={'_blank'} href={menuItem.link}>\n                  Credit: {menuItem.title}\n                </Button>\n              </Space>\n            }\n          >\n            <div className=\"space-x-4 space-y-6\">\n              {menuItem.item.map((item, key) => (\n                <Fragment key={String(key)}>\n                  {/* {item.divider && (\n      <>\n        <a\n          className=\"w-full font-bold capitalize\"\n          href={item?.link ?? '#'}\n          target={item?.link ? '_blank' : '_parent'}\n          rel=\"noreferrer\"\n        >\n          {item.sectionTitle}\n        </a>\n        <hr className=\"w-full border-b border-gray-200\" />\n      </>\n    )} */}\n\n                  {item.render}\n                  <div\n                    className=\"relative flex items-center gap-1 mt-2 text-gray-500 cursor-pointer right-3 bottom-3 hover:text-pink-500\"\n                    onClick={() => {\n                      showCodeMode({\n                        render: item.render,\n                        title: item.title,\n                      });\n                    }}\n                  >\n                    <CodeOutlined className=\"text-pink-600\" />\n                    View: <Typography.Text strong>{item.title}</Typography.Text>\n                  </div>\n                  <hr className=\"w-full border-b border-gray-200\" />\n                </Fragment>\n              ))}\n            </div>\n          </Collapse.Panel>\n        );\n      })}\n    </Collapse>\n  );\n};\n\nexport default DemoButton;",d={"button-demo":{component:(0,r.dynamic)({loader:async()=>(await Promise.all([n.e(102),n.e(224),n.e(50)]).then(n.bind(n,54960))).default,loading:()=>null}),previewerProps:{sources:{_:{tsx:o}},dependencies:{},identifier:"button-demo"}},"blog-demo":{component:(0,r.dynamic)({loader:async()=>(await Promise.all([n.e(102),n.e(224),n.e(50)]).then(n.bind(n,30625))).default,loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{ui:{version:"0.0.0"},"@ant-design/icons":{version:"=>4"}},identifier:"blog-demo"}},"button-demo-1":{component:(0,r.dynamic)({loader:async()=>(await Promise.all([n.e(102),n.e(224),n.e(50)]).then(n.bind(n,35556))).default,loading:()=>null}),previewerProps:{sources:{_:{tsx:a}},dependencies:{},identifier:"button-demo-1"}},"top-demo":{component:(0,r.dynamic)({loader:async()=>(await Promise.all([n.e(102),n.e(224),n.e(50)]).then(n.bind(n,91066))).default,loading:()=>null}),previewerProps:{sources:{_:{tsx:s}},dependencies:{},identifier:"top-demo"}}},c={},m=n(94198),u=n(58138),p=e=>(0,u.jsx)(m.Z,{...e,config:i,demos:d,apis:c})}}]);