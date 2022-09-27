/**
 * Created on 1401/7/5 (2022/9/27).
 * @author {@link https://mirismaili.github.io S. Mahdi Mir-Ismaili}
 */

module.exports = {
  apps: [{
    name: "IP",
    script: "src/main.js",
    args: "",
    autorestart: true,
    log_date_format: "/MM/DD HH:mm",
    cwd: __dirname,
    exec_interpreter: "/usr/bin/node", // default
    exec_mode: "cluster",              // default
    instances: 1,
    max_memory_restart: "1G",
    watch: false,
    env: {},
  }],
};
