// => https://github.com/motdotla/dotenv/issues/133#issuecomment-255298822
import dotenv from 'dotenv'
import path from 'path';

dotenv.config({ path: path.resolve('../.env') })


export default dotenv.config()['parsed']