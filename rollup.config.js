import typescript from '@rollup/plugin-typescript';
import { globbySync } from 'globby';

const configs = globbySync('**/event-*.ts').map((inputFile) => {
  return {
    input: {
      'script.v8': inputFile
    },
    output: {
      format: 'es',
      dir: inputFile.split('/').filter((input) => !/(\.ts)$/.test(input)).join('/')
    },
    plugins: [typescript()]
  }
})

export default configs