/**
 * build后自动打包压缩
 */

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');
const projectPath = path.resolve(__dirname, '../');

fs.access(`${projectPath}/bundles`, fs.constants.F_OK, (err) => {
  if (err) {
    fs.mkdir('bundles', function () {
      bundle(projectPath)
    })
  } else {
    bundle(projectPath)
  }
});

function bundle(path) {
  console.log(projectPath)
  let date = new Date(),
    year = date.getFullYear(),
    mounth = date.getMonth() + 1,
    day = date.getUTCDate(),
    hours = date.getHours(),
    min = date.getMinutes();

  mounth = mounth < 10 ? '0' + mounth : mounth;
  day = date < 10 ? '0' + day : day;
  hours = hours < 10 ? '0' + hours : hours;

  const fileName = 'xxxx-' + year + '_' + mounth + '_' + day + '_' + hours + '_' + min;
  const output = fs.createWriteStream('./bundles/' + fileName + '.zip');
  const archive = archiver('zip', {
    zlib: { level: 9 }
  });

  archive.pipe(output);
  archive.directory(`${path}/dist`, fileName);
  archive.finalize();
}