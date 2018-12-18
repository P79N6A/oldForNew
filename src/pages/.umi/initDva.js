import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'order', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/Order/models/order.js').default) });
app.model({ namespace: 'feedback', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/Feedback/models/feedback.js').default) });
app.model({ namespace: 'profile', ...(require('C:/Users/young/Desktop/myWork/kikyo-admin-pro/src/pages/DataInfo/models/profile.js').default) });
