import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "redirect": "/user/login",
    "exact": true
  },
  {
    "path": "/",
    "redirect": "/dashboard/analysis",
    "exact": true
  },
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
    "routes": [
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User/Login'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": dynamic({ loader: () => import('../User/Register'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": dynamic({ loader: () => import('../User/RegisterResult'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": dynamic({ loader: () => import('../Dashboard/Analysis'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/dashboard/analysis/addproduct",
            "name": "addproduct",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../AddProduct/AddProduct'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/order",
        "name": "order",
        "icon": "profile",
        "routes": [
          {
            "path": "/order/orderManage",
            "name": "orderManage",
            "component": dynamic({ loader: () => import('../Order/OrderManage'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/order/orderManage/addterminal",
            "name": "addterminal",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../Order/AddTerminal'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/feedback",
        "name": "feedback",
        "icon": "warning",
        "routes": [
          {
            "path": "/feedback/feedbackManage",
            "name": "feedbackManage",
            "component": dynamic({ loader: () => import('../Feedback/FeedbackManage'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "path": "/feedback/feedbackManage/datainfo",
            "name": "datainfo",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../DataInfo/DataInfo'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import('../404'), loading: require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/components/PageLoading/index').default }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
