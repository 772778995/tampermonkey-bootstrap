// ==UserScript==
// @name         自动复制打谱工具的 abcVal 到剪切板
// @namespace    npm/vite-plugin-monkey
// @version      0.0.0
// @author       遥遥领先！
// @description  自动复制打谱工具的 abcVal 到剪切板
// @license      MIT
// @icon         https://dev.midiplusedu.com/assets/music_score_editor/images/logo.svg
// @homepage     https://github.com/772778995/tampermonkey-bootstrap
// @homepageURL  https://github.com/772778995/tampermonkey-bootstrap
// @match        *://*/*editor.html*
// @match        *://*/*music_score_editor*
// @require      https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.9/dayjs.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/antd/5.9.0/antd.min.js
// @require      https://registry.npmmirror.com/can-can-word-bug/0.3.4/files/dist/can-can-word-bug.umd.cjs
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const o=document.createElement("style");o.textContent=t,document.head.append(o)})(' .tampermonkey-bootstrap [_space~=y-10px]>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(10px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(10px * var(--tw-space-y-reverse))}.tampermonkey-bootstrap .rounded-full,.tampermonkey-bootstrap [_border~=rounded-full]{border-radius:9999px}.tampermonkey-bootstrap [_cursor~=pointer]{cursor:pointer}.tampermonkey-bootstrap [_cursor~=move]{cursor:move}.tampermonkey-bootstrap .block{display:block}.tampermonkey-bootstrap [_flex~="~"]{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.tampermonkey-bootstrap [_flex~=col]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.tampermonkey-bootstrap [_h~=full]{height:100%}.tampermonkey-bootstrap [_h~=screen]{height:100vh}.tampermonkey-bootstrap [_h~="50px"]{height:50px}[_m~="!t-auto"]{margin-top:auto!important}.tampermonkey-bootstrap .opacity-100{opacity:1}.tampermonkey-bootstrap .opacity-50{opacity:.5}.tampermonkey-bootstrap [_opacity~="70"]{opacity:.7}.tampermonkey-bootstrap [_hover~=opacity-100]:hover{opacity:1}.tampermonkey-bootstrap [_active~=opacity-50]:active{opacity:.5}.tampermonkey-bootstrap .fixed,.tampermonkey-bootstrap [_pos~=fixed]{position:fixed}.tampermonkey-bootstrap .top-30px{top:30px}.tampermonkey-bootstrap .right-30px{right:30px}.tampermonkey-bootstrap .top-0{top:0}.tampermonkey-bootstrap .left-0{left:0}.tampermonkey-bootstrap [_pos~=top-30px]{top:30px}.tampermonkey-bootstrap [_pos~=right-30px]{right:30px}.tampermonkey-bootstrap [_pos~=top-0]{top:0}.tampermonkey-bootstrap [_pos~=left-0]{left:0}.tampermonkey-bootstrap [_w~=auto]{width:auto}.tampermonkey-bootstrap [_w~=screen]{width:100vw}.tampermonkey-bootstrap [_w~="50px"]{width:50px}.tampermonkey-bootstrap [_z~="99999"]{z-index:99999}.tampermonkey-bootstrap [_transition~=opacity]{-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);-o-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;-o-transition-duration:.15s;transition-duration:.15s}.tampermonkey-bootstrap .duration-150,.tampermonkey-bootstrap [_transition~=duration-150]{-webkit-transition-duration:.15s;-o-transition-duration:.15s;transition-duration:.15s} ');

(function (require$$0, ReactDOM, antd, canCanWordBug, $$1) {
  'use strict';

  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  if (typeof unsafeWindow !== "undefined") {
    unsafeWindow;
  }
  const name = "tampermonkey-bootstrap";
  const description = "自动复制打谱工具的 abcVal 到剪切板";
  const license = "MIT";
  const author = "遥遥领先！";
  const version = "0.0.0";
  const homepage = "https://github.com/772778995/tampermonkey-bootstrap";
  const type = "module";
  const scripts = {
    dev: "vite",
    build: "tsc && vite build",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview"
  };
  const dependencies = {
    "ajax-hook": "^3.0.3",
    antd: "5.9.0",
    "can-can-word-bug": "^0.3.4",
    dayjs: "1.11.9",
    jquery: "^3.7.1",
    lodash: "^4.17.21",
    "lodash-es": "^4.17.21",
    react: "^18.2.0",
    "react-dom": "^18.2.0"
  };
  const devDependencies = {
    "@types/crypto-js": "^4.2.1",
    "@types/jquery": "^3.5.29",
    "@types/lodash": "^4.14.202",
    "@types/mime": "^3.0.4",
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@typescript-eslint/eslint-plugin": "^6.10.0",
    "@typescript-eslint/parser": "^6.10.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "can-can-need-bug": "^0.0.2",
    eslint: "^8.53.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.4",
    typescript: "^5.2.2",
    "unplugin-auto-import": "^0.16.7",
    "unplugin-auto-import-antd": "^0.0.1",
    vite: "^5.0.0",
    "vite-plugin-monkey": "^3.5.0",
    "vite-plugin-windicss": "^1.9.2",
    windicss: "^3.5.6"
  };
  const packageJSON = {
    name,
    description,
    license,
    author,
    "private": true,
    version,
    homepage,
    type,
    scripts,
    dependencies,
    devDependencies
  };
  const storage = canCanWordBug.getLocalForage({ name: packageJSON.name });
  const FloatBtn = ({
    wrapStyle = { top: "30px", right: "30px" },
    children,
    delayTime = 150,
    onClick
  }) => {
    const [isShow, setIsShow] = require$$0.useState(false);
    const [offset, setOffset] = require$$0.useState({ x: 0, y: 0 });
    require$$0.useEffect(() => {
      (async () => {
        const offset2 = await storage.getItem("offset");
        if (offset2)
          setOffset(offset2);
        setIsShow(true);
      })();
    }, []);
    const [startPoint, setStartPoint] = require$$0.useState(null);
    let setStartPointTimer = -1;
    const isDragging = require$$0.useMemo(() => !!startPoint, [startPoint]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          _pos: "fixed",
          _z: "99999",
          _w: "auto",
          _active: "opacity-50",
          _transition: "opacity 150",
          style: {
            display: isShow ? "block" : "none",
            ...wrapStyle,
            // 容器样式
            transform: `translate(${offset.x}px, ${offset.y}px)`
            // 偏移位置
          },
          onMouseDown: (e) => {
            setStartPointTimer = setTimeout(
              () => setStartPoint({ x: e.pageX - offset.x, y: e.pageY - offset.y }),
              delayTime
            );
          },
          onMouseUp: (e) => {
            onClick && onClick(e);
            clearTimeout(setStartPointTimer);
          },
          children
        }
      ),
      isDragging && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          _pos: "fixed top-0 left-0",
          _z: "99999",
          _w: "screen",
          _h: "screen",
          _cursor: "move",
          onMouseMove: (e) => {
            if (!startPoint)
              return;
            const x = e.pageX - startPoint.x;
            const y = e.pageY - startPoint.y;
            setOffset({ x, y });
            storage.setItem("offset", offset);
          },
          onMouseUp: () => setStartPoint(null)
        }
      )
    ] });
  };
  const getAbcVal = () => $("#source").val();
  const copyAbcVal = () => {
    $("#source").select();
    document.execCommand("Copy");
    antd.message.success("复制成功");
  };
  const xzdsUrl = "https://abc.ixzds.com";
  const goToXzds = async () => {
    GM_setValue("abcVal", getAbcVal() + "");
    window.open(xzdsUrl);
  };
  setTimeout(async () => {
    if (location.href.includes(xzdsUrl)) {
      const abcVal = GM_getValue("abcVal");
      if (abcVal) {
        $("#source").val(abcVal);
        src_change();
        GM_deleteValue("abcVal");
      }
    }
  }, 1e3);
  const App = () => {
    const [isShowDrawer, setIsShowDrawer] = require$$0.useState(false);
    const [abcVal, _setAbcVal] = require$$0.useState(getAbcVal());
    $(document).ready(() => {
      $("#source").on("change", function() {
        alert(1234);
        antd.message.success("1234");
      });
    });
    const _src_change = src_change;
    src_change = () => {
      _src_change();
      _setAbcVal(getAbcVal());
    };
    const setAbcVal = (v) => {
      _setAbcVal(v);
      $("#source").val(v);
      _src_change();
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatBtn, { _pos: "top-30px right-30px", onClick: () => setIsShowDrawer(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "https://dev.midiplusedu.com/assets/music_score_editor/images/logo.svg",
          _w: "50px",
          _h: "50px",
          _border: "rounded-full",
          _cursor: "pointer",
          _opacity: "70",
          _hover: "opacity-100",
          _transition: "opacity duration-150",
          draggable: false
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        antd.Drawer,
        {
          zIndex: +"9".repeat(10),
          className: packageJSON.name,
          open: isShowDrawer,
          onClose: () => setIsShowDrawer(false),
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { _flex: "~ col", _h: "full", _space: "y-10px", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: copyAbcVal, children: "复制 abcVal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: () => changeStaffType(null, 2), children: "切换为简谱" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: () => changeStaffType(null, 0), children: "切换为五线谱" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: () => changeStaffType(null, 1), children: "切换为混谱" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(antd.Button, { onClick: goToXzds, children: "跳转到小知大数" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              antd.Input.TextArea,
              {
                _m: "!t-auto",
                rows: 25,
                value: abcVal,
                onChange: (e) => setAbcVal(e.target.value)
              }
            )
          ] })
        }
      )
    ] });
  };
  const rootElTag = `${packageJSON.name}`;
  const [root] = $$1(`<${rootElTag}></${rootElTag}>`).addClass(rootElTag);
  $$1("html").append(root);
  ReactDOM.createRoot(root).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
  );

})(React, ReactDOM, antd, canCanWordBug, jQuery);