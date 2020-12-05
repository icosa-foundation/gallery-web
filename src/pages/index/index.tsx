import style from './index.module.css'
import { LogoViewer } from '../../componetns/index'

export default function Index() {
    return <div className={style['main']}>
        <LogoViewer></LogoViewer>
    </div>
}  