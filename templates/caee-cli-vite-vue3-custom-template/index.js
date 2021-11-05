const fse = require('fs-extra')

function install(options) {
  console.log('自定义模板接收信息=>', options)
  const { targetPath, sourcePath } = options
  fse.ensureDirSync(sourcePath)
  fse.ensureDirSync(targetPath)
  fse.copySync(sourcePath, targetPath)
  console.log('模板拷贝完成...')
}

module.exports = install
