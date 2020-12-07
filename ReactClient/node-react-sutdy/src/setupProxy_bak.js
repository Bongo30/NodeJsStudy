// const proxy = require('http-proxy-middleware');

// module.exports = function(app){
//     app.use(
//         '/api',
//         proxy({
//             target : 'http://localhost:5000',
//             changeOrigin: true,
//         })
//     );
// };

//포트가 다르기 때무에 서버 , 클라이언트에 따로 설정 해주지 않으면
//cros정책에 의해 막힘

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
// };