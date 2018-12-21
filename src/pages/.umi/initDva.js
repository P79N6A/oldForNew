import dva from "dva";
import createLoading from "dva-loading";

const runtimeDva = window.g_plugins.mergeConfig("dva");
let app = dva({
  history: window.g_history,

  ...(runtimeDva.config || {})
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({
  namespace: "global",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/global.js")
    .default
});
app.model({
  namespace: "list",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/list.js").default
});
app.model({
  namespace: "login",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/login.js").default
});
app.model({
  namespace: "project",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/project.js")
    .default
});
app.model({
  namespace: "setting",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/setting.js")
    .default
});
app.model({
  namespace: "user",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/models/user.js").default
});
app.model({
  namespace: "register",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/User/models/register.js")
    .default
});
app.model({
  namespace: "activities",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/Dashboard/models/activities.js")
    .default
});
app.model({
  namespace: "chart",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/Dashboard/models/chart.js")
    .default
});
app.model({
  namespace: "monitor",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/Dashboard/models/monitor.js")
    .default
});
app.model({
  namespace: "add",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/AddProduct/models/add.js")
    .default
});
app.model({
  namespace: "order",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/Order/models/order.js")
    .default
});
app.model({
  namespace: "feedback",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/Feedback/models/feedback.js")
    .default
});
app.model({
  namespace: "profile",
  ...require("/Users/CD/Desktop/以旧换新/oldForNew/src/pages/DataInfo/models/profile.js")
    .default
});
