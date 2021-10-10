const Express = require("express");
const mssql = require("mssql");
const server = process.env.db_server || "192.168.3.227";
const database = process.env.db_database || "JunoDC";
const username = process.env.db_username || "JS_DataUser";
const password = process.env.db_password || "2wsx#EDC123456@@";
const connectionString = `Server=${server};Database=${database};User Id=${username};Password=${password};Encrypt=false`;
const startServer = async () => {
  const app = Express();

  const virtualDirPath = process.env.virtualDirPath || "";
  app.use(virtualDirPath, Express.static(__dirname + "/public")); //使用靜態資料夾

  app.get(virtualDirPath + "/getSites", async (req, res) => {
    // try {
    //   await mssql.connect(connectionString);
    //   const query = `select stid,lat,lng,county,town,iit from JunoCtrl.dbo.CtrlStation where county='高雄市'`;
    //   const result = await mssql.query(query);
    //   const obj = {};
    //   result.recordset.forEach((el) => {
    //     obj[el.stid] = {
    //       stid: el.stid,
    //       iit: el.iit,
    //       latLng: [el.lat, el.lng],
    //       county: el.county,
    //       town: el.town,
    //     };
    //   });
    //   res.send(obj);
    // } catch (err) {
    //   console.log(err);
    //   res.send({});
    // }
    res.send({});
  });

  app.get(virtualDirPath + "/getEvent", async (req, res) => {
    // try {
    //   const date = req.query.time
    //     ? new Date(req.query.time)
    //     : (() => {
    //         const d = new Date();
    //         d.setHours(d.getHours() + 8);
    //         return d;
    //       })();
    //   date.setMinutes(Math.floor(date.getMinutes() / 5) * 5);
    //   date.setSeconds(0);
    //   date.setMilliseconds(0);
    //   const time = date.toISOString();

    //   await mssql.connect(connectionString);
    //   const query = `select a.stid,b.value4 as [pm2.5],b.date_time from JunoCtrl.dbo.CtrlStation as a
    //               left join JunoDC.dbo.S528T05 as b on a.stid = b.stid
    //               where a.county='高雄市' and b.date_time='${time}' and b.value4!=-9999
    //               union
    //               select a.stid,b.value4 as [pm2.5],b.date_time from JunoCtrl.dbo.CtrlStation as a
    //               left join JunoDC.dbo.S680T05 as b on a.stid = b.stid
    //               where a.county='高雄市' and b.date_time='${time}' and b.value4!=-9999`;
    //   const result = await mssql.query(query);
    //   const obj = {};
    //   let len = 0;
    //   result.recordset.forEach((el) => {
    //     obj[el.stid] = el;
    //   });
    //   len = result.recordset.length;

    //   res.send({ data: obj, time: time, count: len });
    // } catch (err) {
    //   console.log(err);
    //   res.send({});
    // }
    res.send({});
  });

  const port = process.env.PORT || 7788;
  const host = process.env.BASE_URL || "localhost";
  const baseUrl = `http://${host}:${port}`;
  app.listen(port, () => {
    console.log(`網頁：${baseUrl}`);
  });
};
startServer();
