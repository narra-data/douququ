const fs = require('fs');
let html = fs.readFileSync(__dirname + '/douququ-template.html', 'utf8');
html = html.replace('%%PLEX600%%', fs.readFileSync(__dirname + '/plex600.b64', 'utf8'));
const OG = '<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect x=%228%22 y=%228%22 width=%2284%22 height=%2240%22 rx=%228%22 fill=%22%23c8404f%22/><rect x=%228%22 y=%2252%22 width=%2284%22 height=%2240%22 rx=%228%22 fill=%22%233878c2%22/></svg>">' +
  '<meta name="description" content="电子斗蛐蛐:两个人一部手机当场决斗。抢绿灯/连点大战/放手快,五局三胜,输的点奶茶。">' +
  '<meta property="og:title" content="电子斗蛐蛐 · 两个人一部手机当场决斗">' +
  '<meta property="og:description" content="抢跑判负,松早判负,五局三胜。找个人来斗。">' +
  '<meta property="og:image" content="https://narra-data.github.io/douququ/share-thumb.png">' +
  '<meta property="og:url" content="https://narra-data.github.io/douququ/">' +
  '<meta property="og:type" content="website">';
const WXIMG = '<img class="wx-thumb" src="https://narra-data.github.io/douququ/share-thumb.png" alt="" width="300" height="300" style="position:absolute;left:-9999px;top:0">';
fs.writeFileSync(__dirname + '/../app.html', html);
const standalone = '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">' + OG + html.replace(/^(<title>.*<\/title>)/, '$1</head><body>' + WXIMG) + '</body></html>';
fs.writeFileSync(__dirname + '/../index.html', standalone);
console.log('built');
